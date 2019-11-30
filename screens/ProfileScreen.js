import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Button,
  Divider
} from 'react-native-elements';
import { avatarDB, userData } from '../constants/Databases'

export default class ProfileScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user_profile: userData.avatar_picked,
    }
  }
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image source={avatarDB[userData.avatar_picked].pic} style={styles.avatar}/>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.level}>Level 13</Text>
              <View style={styles.profileProgressBar}>
                <Animated.View style={{position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundColor: "#8BED4F", width: '70%'}}/>
              </View>
              <Text style={styles.userInfo}>Progress: 70%</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.body}>
            <View style={[styles.buttonDivide], {flexDirection:"row", justifyContent:"space-around", alignItems:"center"}} alignItems="center">
              <Button 
                style={styles.button}
                onPress={() => {userData.avatar_picked = (userData.avatar_picked - 1) % 8; this.setState({user_profile : Math.abs((this.state.user_profile - 1) % 8)})}}
                color="#90A4AE"
                raised={true}
                title="<---" />
              <Button 
                style={styles.button}
                color="#90A4AE"
                raised={true}
                title="Choose avatar" />
              <Button 
                style={styles.button}
                color="#90A4AE"
                onPress={() => {userData.avatar_picked = (userData.avatar_picked + 1) % 8; this.setState({user_profile : Math.abs((this.state.user_profile + 1) % 8)})}}
                raised={true}
                title="--->" />
            </View>

            <Divider style={styles.divider} />
            <Text style={styles.balance}>Account Balance: ${userData.cash}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.goal}>Current Goal: Reach account balance of ${userData.next_goal}</Text>
            <Divider style={styles.divider} />

            <Text style={styles.title}>Achievements</Text>
            <View style={styles.circles}>
              <TouchableOpacity
                style = {{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  marginTop: 10,
                  marginLeft: 10,
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').width * 0.2,
                  backgroundColor:'#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image style={{width:45, height:45}} source={require('../assets/images/icons8-star-80.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  marginTop: 10,
                  marginLeft: 10,
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').width * 0.2,
                  backgroundColor:'#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image style={{width:65, height:65}} source={require('../assets/images/icons8-money-bag-100.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  marginTop: 10,
                  marginLeft: 10,
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').width * 0.2,
                  backgroundColor:'#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image style={{width:65, height:65}} source={require('../assets/images/icons8-money-box-96.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  marginTop: 10,
                  marginLeft: 10,
                  width: Dimensions.get('window').width * 0.2,
                  height: Dimensions.get('window').width * 0.2,
                  backgroundColor:'#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                 <Image style={{width:65, height:65}} source={require('../assets/images/icons8-penguin-96.png')}/>
              </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.goal}>Start date: 14th June 2019</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 500,
  },
  level: {
    fontSize: 16,
  },
  buttonDivide: {
    marginTop: 15,
  },

  header: {
    backgroundColor: "#F6F6F6",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  balance: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: '600',
    color: '#ffffff'
  },
  goal: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontWeight: '500',
    color: '#ffffff'
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "#F6F6F6",
  },
  name:{
    fontSize:28,
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
    marginHorizontal: 10,
    borderRadius: 20
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
    color:"#ffffff",
    fontWeight:'600',
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  divider: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginVertical: 15,
  },
  profileProgressBar: {
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  },
  circles: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: "center"
  },
});

ProfileScreen.navigationOptions = {
  title: 'My Profile',
};
