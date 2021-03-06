import React from 'react';
import {Text} from 'react-native';
import style from '../styles/style';

export class PlaneText extends React.Component {
  render (){
    return (
      <Text style = {style.PlaneText}>{
        this.props.children
      }
      </Text>)
  ;
}
}
export class PlaneText2 extends React.Component {
  render (){
    return (
      <Text style = {style.PlaneText2}>{
        this.props.children
      }
      </Text>)
  ;
}
}
export class textText extends React.Component {
  render (){
    return (
      <Text style = {style.textText}>{
        this.props.children
      }
      </Text>)
  ;
}
}

export class LogInText extends React.Component {
  render(){
    return (
      <Text style = {style.LogInText}>{
        this.props.children
      }
      </Text>)
  ;
}
}
