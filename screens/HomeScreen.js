import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState, useRef } from 'react';
import {AsyncStorage} from 'react-native';

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
   },[progress]);
  const widthBAR = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background/clouds.gif')} style={{flex: 1, resizeMode: 'cover'}}>
      <View style={{backgroundColor: '#7481FCFF'}}></View>
      <ImageBackground source={require('../assets/background/backgroundmountain.png')} style={{flex: 1, resizeMode: 'cover'}}>
      <View style={styles.profileContainer}>
        <Image source={ require('../assets/characters-and-sprites/eskimo_black.png') } style={styles.profileImage}/>
        <View style={styles.right_profile}>
        <Text style={styles.profileName}>JAYDEN</Text>
        <Text style={styles.level}>Level 13</Text>
        <View style={styles.profileProgressBar}>
          <Animated.View style={{position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#8BED4F", width: widthBAR,}}/>
        </View>
        <Text>Progress:{`${progress}%`}</Text>
<<<<<<< HEAD
=======
        <Text>30 till next goal</Text>
>>>>>>> master
        </View>
      </View>
      <View style={{display:'flex', height:'100%'}}>
        <View style={{flex:1}}></View>{/*Spacer for mountain*/}
        <View style={{flex:3,alignItems:'center'}}>
           <View style={{flex:2,backgroundColor:"#0FF8", width:0}}>
             <View style={{
              transform: [
                {rotate: '240deg'}
              ],
              height: 10,
              left: 15,
              top: 40,
              width: 100,
              backgroundColor: 'white',
              borderRadius: 5
             }}>
               <Animated.View style={{position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
                 backgroundColor: "#8BED4F", width: 0,}}/>
             </View>
           </View>
           <View style={{flex:3, width:0}}>
             <View style={{
              transform: [
                {rotate: '320deg'}
              ],
              height: 10,
              left: -70,
              top: 63,
              width: 180,
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
             <Image source={ require('../assets/characters-and-sprites/redflag.png')}
               style={{position: 'absolute',
                   left: 20,
                   top: -160,
                   }}/>
             <Image source={ require('../assets/characters-and-sprites/redflag.png')}
               style={{position: 'absolute',
                   left: 70,
                   top: -72,
                   }}/>
           </View>
           <View style={{flex:5, width:0}}>
            <View style={{
              transform: [
                {rotate: '220deg'}
              ],
              height: 10,
              left: -73,
              width: 200,
              top: 72,
              backgroundColor: 'white',
              borderRadius: 5
             }}>
               <Animated.View style={{position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
                 backgroundColor: "#8BED4F", width: '100%',}}/>
             </View>
           </View>
           <View style={{flex:5, width:0}}>
            <View style={{
              transform: [
                {rotate: '320deg'}
              ],
              height: 10,
              left: -165,
              width: 300,
              top: 50,
              backgroundColor: 'white',
              borderRadius: 5
             }}>
               <Animated.View style={{position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
                 backgroundColor: "#8BED4F", width: '100%',}}/>
             </View>
           </View>
           <Image source={ require('../assets/characters-and-sprites/greenflags.png')}
             style={{position: 'absolute',
                 left: 135,
                 top: 113,
                 }}/>
            <Image source={ require('../assets/characters-and-sprites/greenflags.png')}
             style={{position: 'absolute',
                 left: 280,
                 top: 238,
                 }}/>
            <Image source={ require('../assets/characters-and-sprites/shit-hut.png')}
             style={{position: 'absolute',
                 left: 10,
                 top: 420,
                 }}/>
         </View>
      </View>
      </ImageBackground>
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
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    padding: 10,
    backgroundColor: '#FFFFFFAF',
    // 'width': 130,
    // 'height': 80,
    ...Platform.select({
      ios: {
        top: 30,
        left: 10,
      },
      android: {
        top: 60,
        left: 10,
      },
    }),
    borderRadius:8,
  },
  
  profileImage: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  right_profile: {
    marginTop: 5,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingTop: 20,
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
  level: {
    
  }
});
