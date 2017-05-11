import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './style';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import logo from '../Resources/logo-200.png';

 class EnterHandle extends React.Component {

componentDidMount(){
  this.props.setLocked();
}

 render() {
   return(
   <View style = {style.View4}>
   <View style = {style.CounterBoxMain}>
     <View style = {style.HeaderLogo}>
     </View>
   </View>
   <View style = {style.Email2}>
   <View style = {style.container5}>
   <PlaneText2>What is your username?</PlaneText2>
       <TextInput value={this.props.currentHandle} onChangeText={this.props.changeHandle} style = {style.TextField4} placeholder = 'Username' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
        </View>
        </View>
        <View style = {style.swipe2}>
        <LogInText>&#10094; Swipe to Continue</LogInText>
        </View>
   </View>
 );
 }
 }
export default EnterHandle;
