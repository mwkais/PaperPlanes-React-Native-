import React from 'react';
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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import SearchPage from './SearchPage';
import Welcome from './Welcome';
import CreateTextPost from './CreateTextPost';
import CreateLinkPost from './CreateLinkPost';
import CreatePicPost from './CreatePicPost';
import style from './style';
import logo from '../Resources/logo-200.png';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import OurCamera from './OurCamera';
import MyCameraRoll from './MyCameraRoll';
import PostPassMain from './PostPassMain';
import mail from '../Resources/mail.png';
import password from '../Resources/password.png';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435'},
    headerTitleStyle:{ color: '#FFF'},
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

    <View style = {style.View}>
      <View style = {style.Pic}>
      <Image source = {logo}/>
      <PlaneText>PaprPlane</PlaneText>
      </View>
        <View style = {style.container}>
        <View style = {style.SignUp}>
        <TouchableOpacity onPress={() => { navigate('SignUp2')}} ><PlaneText>Sign Up</PlaneText></TouchableOpacity>
        </View>
      <View style = {style.LogIn}>
      <TouchableOpacity onPress={() => { navigate('LogIn')}} ><PlaneText>Log In</PlaneText></TouchableOpacity>
        </View>
      {/*test button will remove later*/}
      <View>
        <Button onPress={() => { navigate('Main')}} title="Main Screen"></Button>
        </View>
        </View>
    </View>

    );
  }
}

const PaprPlanes = StackNavigator({
  Home: { screen: HomeScreen },
  LogIn: {screen: LogIn },
  SignUp: {screen: SignUp },
  Main: {screen: Main },
  CreateTextPost: { screen: CreateTextPost },
  CreateLinkPost: { screen: CreateLinkPost },
  CreatePicPost: { screen: CreatePicPost },
  PlaneText: {screen: PlaneText},
  PlaneText2: {screen: PlaneText2},
  textText: {screen: textText},
  LogInText: {screen: LogInText},
  SignUp1: { screen: SignUp1 },
  SignUp2: { screen: SignUp2 },
  OurCamera:{screen:OurCamera},
  MyCameraRoll:{screen:MyCameraRoll},
  PostPassMain: { screen: PostPassMain },
  SearchPage: { screen: SearchPage },
  Welcome: { screen: Welcome },

});

AppRegistry.registerComponent('PaprPlanes', () => PaprPlanes);
