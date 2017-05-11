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
import style from './style';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import backarrow from '../Resources/backarrow.png';

class CreateTextPost extends React.Component {
  constructor(props){
   super(props);

   this.state = {
    currentCaption: '',
    currentText: '',
   }
   this.changeText = this.changeText.bind(this);
   this.changeCaption = this.changeCaption.bind(this);
 }

 changeText(text){
  this.setState({
    currentText: text,
  })
}
 changeCaption(caption){
  this.setState({
    currentCaption: caption,
  })

class CreateTextPost extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435'},
    headerTitleStyle:{ color: '#FFF'},
    title: 'Text Post',
    backButton: '#FFF',
}
  render(){

const { navigate } = this.props.navigation;

return (
  <View style = {style.View3}>
  <View style = {style.PostCreateHeader}>
    <View style = {style.LeftContainer}>
      <View style = {style.LeftArrow}>
        <Image source={backarrow} style={style.LeftArrow}/>
      </View>
    </View>
    <TouchableOpacity style = {style.MiddleContainer} onPress={() => { navigate('')}} ><LogInText>Text Post</LogInText></TouchableOpacity>
    <View style = {style.RightContainer}></View>
  </View>
  <View style = {style.container2}>
  <TextInput style = {style.TextField} placeholder = 'Text' autoCapitalize = 'none'/>
  <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
  </View>
  <View style = {style.container}>
  <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain', {postInfo: this.state})}} ><LogInText>Submit</LogInText></TouchableOpacity>
</View>
  </View>
    );
  }

}

export default CreateTextPost;
