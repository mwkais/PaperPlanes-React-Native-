import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import Post from './Post';
import cathedral from '../Resources/download.jpeg';

class ViewPost extends React.Component {
  constructor(props){
   super(props);
   const { params } = this.props.navigation.state;

   this.state = {
    PostInfo: params.info,
   }
 }
 static navigationOptions = {
   headerStyle:{ backgroundColor: '#373435', marginTop: 20},
   headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
   title: 'Pass Your Post!',
}
  render(){

const { navigate } = this.props.navigation;

return (
  <View style = {style.View3}>
  <View style = {style.container6}>

           <Text style = {style.SenderName}>{this.state.PostInfo.SenderName}</Text>
           <Text style = {style.CreatorName}>{this.state.PostInfo.AuthorName}</Text>
           <Text style = {style.CreatorName}>{this.state.PostInfo.Text}</Text>
           <Image style = {style.cathedral} source = {cathedral}/>
           <Text style = {style.WebPreview2}>{this.state.PostInfo.Caption}</Text>
</View>
<View style = {style.container}>
        <TouchableOpacity style = {style.SignUp2} onPress={() => {navigate('PostPassMain', {PostInfo: this.state.PostInfo})} } >
          <LogInText>Pass</LogInText>
          </TouchableOpacity>
</View>
</View>
    );
  }

}

export default ViewPost;
