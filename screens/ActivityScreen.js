import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ActivityScreen() {
  return(
    <View>
      <View style={[styles.balloon, {backgroundColor: '#2F951F'}]}>
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>$5.00 received from Mum for washing the car</Text>
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
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>$2.00 received from Dad for walking the dog</Text>
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
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>$2.00 received from Dad for taking out the bins</Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View style={styles.arrowLeft} />
        </View>
        </View>
      
      <View style={[styles.balloonRight, {backgroundColor: '#1F5595'}]}>
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>Requested more tasks from Mum and Dad</Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View style={styles.arrowLeft} />
        </View>
        </View>

      <View style={[styles.balloon, {backgroundColor: '#C70039'}]}>
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>Dad added three new tasks</Text>
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
        <Text style={{paddingTop: 5, color: 'white', fontSize: 16}}>$4.00 received from Mum for tidying room</Text>
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

ActivityScreen.navigationOptions = {
  title: 'Activity',
};

