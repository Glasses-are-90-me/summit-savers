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
      <ImageBackground source={require('../assets/background/backgroundmountain.png')} style={{flex: 1, resizeMode: 'cover'}}>
      <View>
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
            backgroundColor: "#8BED4F", width: widthBAR}}/>
        </View>
        <Text>lvl:{`${progress}%`}</Text>
        </View>
      </View>
      <View style={{flex:1}}></View>{/*Spacer for mountain*/}
      <View style={{flex:3, borderColor: '#000',
         borderWidth: 2,
         borderRadius: 5}}>
         <Text>Hellllo world</Text>
       </View>{/*Spacer for mountain*/}
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
