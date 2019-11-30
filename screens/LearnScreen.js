import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function LearnScreen() {
  return(
    <View>
      <View style={[styles.balloon, {backgroundColor: '#2F951F'}]}>
        <Image source={require('../assets/learning-materials/smallthumb1.png')} style={{resizeMode: 'cover', width:325 }}></Image>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          
          <View style={styles.arrowLeft} />
        </View>
        </View>

      <View style={[styles.balloon, {backgroundColor: '#2F951F'}]}>
        <Image source={require('../assets/learning-materials/smallthumb2.png')} style={{resizeMode: 'cover', width:325 }}></Image>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View style={styles.arrowLeft} />
        </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 14,
    flexDirection: 'row'
  },
  itemIn: {
      marginLeft: 10
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  balloon: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
    marginVertical: 10,
    marginRight: 60,
    marginLeft: 10
  },
   balloonRight: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
    marginVertical: 10
   },  
  arrowContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
  },
  arrowLeftContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
  },

  arrowRightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  arrowLeft: {
      left: -20,
  },

  arrowRight: {
    right: -20,
  }

})

LearnScreen.navigationOptions = {
  title: 'Learn',
};

