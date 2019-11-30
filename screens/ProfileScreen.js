import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Divider
} from 'react-native-elements';

export default class ProfileScreen extends Component {

  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image source={ require('../assets/characters-and-sprites/eskimo_black.png') } style={styles.avatar}/>
              <Text style={styles.name}>JAYDEN</Text>
              <Text style={styles.userInfo}>Progress: 70%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.body}>
            <View alignItems="center">
              <Button 
                style={styles.button}
                raised={true}
                title="Choose avatar" />
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.title}>Achievements</Text>
          </View>
          <View style={styles.title}>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 500,
  },

  header: {
    backgroundColor: "#F6F6F6",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#68A6F0",
    height:500,
    marginHorizontal: 20,
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  button: {
    width: 50,
    height: 100,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    color:"#000000",
    fontWeight:'600',
    alignSelf: "flex-start",
  },
  divider: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginVertical: 20,
  }
});

ProfileScreen.navigationOptions = {
  title: 'My Profile',
};
