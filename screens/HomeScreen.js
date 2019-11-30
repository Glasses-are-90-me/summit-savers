import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState, useRef } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Animated,
  StatusBar
} from 'react-native';
import { MonoText } from '../components/StyledText';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export default function HomeScreen() {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
   useInterval(() => {
     if(progress < 70 ) {
       setProgress(progress + 5);
     }
   }, 100);
  useEffect(() => {
     Animated.timing(animation.current, {
       toValue: progress,
       duration: 100
     }).start();
   },[progress])
  const widthBAR = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={require('../assets/background/backgroundmountain.png')} style={{flex: 1, resizeMode: 'cover'}}>
      <View style={styles.profileContainer}>
        <Image source={ require('../assets/characters-and-sprites/eskimo_black.png') } style={styles.profileImage}/>
        <View style={styles.right_profile}>
        <Text style={styles.profileName}>JAYDEN</Text>
        <View style={styles.profileProgressBar}>
          <Animated.View style={{position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#8BED4F", width: widthBAR,}}/>
        </View>
        <Text>lvl:{`${progress}%`}</Text>
        </View>
      </View>
      <View style={{display:'flex', height:'100%'}}>
        <View style={{flex:1}}></View>{/*Spacer for mountain*/}
        <View style={{flex:3, backgroundColor: '#FFF9'}}>
           <View style={{flex:2, backgroundColor: '#F009'}}>
             <View style={{
              transform: [
                {rotate: '240deg'}
              ],
              height: 10,
              left: '52%',
              top: '35%',
              width: '26%',
              backgroundColor: 'white',
              borderRadius: 5
             }}>
               <Animated.View style={{position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
                 backgroundColor: "#8BED4F", width: widthBAR,}}/>
             </View>
           </View>
           <View style={{flex:3, backgroundColor: '#FF09'}}>
             <View style={{
              transform: [
                {rotate: '320deg'}
              ],
              height: 10,
              left: '29%',
              top: '44%',
              width: '48%',
              backgroundColor: 'white',
              borderRadius: 5
             }}>
               <Animated.View style={{position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
                 backgroundColor: "#8BED4F", width: widthBAR,}}/>
             </View>
           </View>
           <View style={{flex:5, backgroundColor: '#0F09'}}></View>
           <View style={{flex:5, backgroundColor: '#00F9'}}></View>
         </View>
      </View>
      </ImageBackground>
      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
function getUserIcon() {
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2280EB',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    // 'width': 130,
    // 'height': 80,
    ...Platform.select({
      ios: {
        top: 40,
        left: 20,
      },
      android: {
        top: 40,
        left: 20,
      },
    }),
  },
  
  profileImage: {
    'width': 80,
    'height': 80,
    marginRight: 20,
  },
  right_profile: {
    marginTop: 5,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingTop: 30,
  },
  profileProgressBar: {
     height: 10,
     width: '100%',
     backgroundColor: 'white',
     borderColor: '#000',
     borderWidth: 2,
     borderRadius: 5
   },
  navigationFilename: {
    marginTop: 5,
  },
});
