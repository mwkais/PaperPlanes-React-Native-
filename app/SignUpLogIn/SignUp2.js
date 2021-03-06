import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/style';
import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView ,{ ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import EnterUserName from './EnterUserName';
import EnterUserPassword from './EnterUserPassword';
import EnterHandle from './EnterHandle';
import EnterEmail from './EnterEmail';
import EnterDateOfBirth from './EnterDateOfBirth';
import logo from '../Resources/logo-200.png';
import {PlaneText, PlaneText2, textText, LogInText} from '../styles/PlaneText';
import PostPassMain from '../PostPass/PostPassMain';

 class SignUp2 extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       currentFullName:"",
       currentHandle:"",
       currentEmail:"",
       currentPassword:"",
       currentDateOfBirth:"",
        locked:true,
     };
     this.changeFullName = this.changeFullName.bind(this);
     this.changeHandle = this.changeHandle.bind(this);
     this.changeEmail=this.changeEmail.bind(this);
     this.changePassword=this.changePassword.bind(this);
     this.changeDateOfBirth=this.changeDateOfBirth.bind(this);
     this.setLocked = this.setLocked.bind(this);
     console.log("Signup2 constructor");
   }

   static navigationOptions = ({navigation}) => {
     return ({
       header: () => {
         return (
        <Text style={{ backgroundColor: '#373435', marginTop: 20}}>
            <TouchableOpacity
              style = {{width: 50, height: 50}}
              onPress={() => {
                 navigation.goBack();
               }} >

              <PlaneText>&#10094;</PlaneText>
            </TouchableOpacity>
          <Image source={logo} style={{width: 40, height: 40, marginLeft: 125}} />
        </Text>) },

     });
 }

setLocked() {
  this.setState({
    currentFullName:"",
    currentHandle:"",
    currentEmail:"",
    currentPassword:"",
    currentDateOfBirth:"",
     locked:true,
  })
}

changePassword(Password) {
  let tem = true;
  if (Password.length > 0){
    tem = false;
  }
    this.setState({
      currentPassword: Password,
      locked:tem,
    })
  }

changeFullName(fullName) {
  let tem = true;
  if (fullName.length > 0){
    tem = false;
  }
    this.setState({
      currentFullName: fullName,
      locked:tem,
    })
  }

  changeHandle(handle){
    let tem = true;
    if (handle.length > 0){
      tem = false;

    }
    this.setState({
      currentHandle: handle,
      locked:tem,
    })
  }

  changeEmail(email){
    let tem = true;
    if (email.length > 0){
      tem = false;
    }
    this.setState({
      currentEmail: email,
      locked:tem,
    })
  }

  changeDateOfBirth(dob){
    let tem = true;
    if (dob.length > 0){
      tem = false;
    }
    this.setState({
      currentDateOfBirth: dob,
      locked:tem,
    })
  }


 render() {
  //  const styles = StyleSheet.create ({
  // input: {
  //    margin: 15,
  //    height: 40,
  //    borderColor: 'grey',
  //    borderWidth: 1,
  // }
  // })
   const { navigate } = this.props.navigation;

   return (
     <ScrollableTabView
       locked = {this.state.locked}
       initialPage={0}
       renderTabBar={() => <View />}
     >
       <EnterUserName currentFullName={this.state.currentFullName}  changeFullName={this.changeFullName} tabLabel='Tab #1'/ >
       <EnterEmail setLocked={this.setLocked} currentEmail={this.state.currentEmail}  changeEmail={this.changeEmail} tabLabel='Tab #2'/>
       <EnterUserPassword setLocked={this.setLocked} currentPassword={this.state.currentPassword}  changePassword={this.changePassword} tabLabel='Tab #3'/>
       <EnterHandle setLocked={this.setLocked} currentHandle={this.state.currentHandle}  changeHandle={this.changeHandle} tabLabel='Tab #4'/>
       <EnterDateOfBirth navigation={this.props.navigation} setLocked={this.setLocked} currentDateOfBirth={this.state.currentDateOfBirth}  changeDateOfBirth={this.changeDateOfBirth} tabLabel='Tab #5'/>

 </ScrollableTabView>

   );
 }
}
export default SignUp2;
