import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity

} from 'react-native';
import { StackNavigator } from 'react-navigation'
import PostList from './PostList'
import CounterBar from './CounterBar'
import getPost from './getPost'
import style from './style'
import createtextpost2 from '../Resources/createtextpost2.png';
import camera2 from '../Resources/camera2.png';
import link2 from '../Resources/link2.png';
import FriendRequest from './FriendRequest';
import Search from './Search';
import OurCamera from './OurCamera';
import MyCameraRoll from './MyCameraRoll';

class Main extends React.Component {
  constructor(props){
   super(props);

   this.state={
     PostData: getPost()
   }
 }

  render(){
    const { navigate } = this.props.navigation;
    return (
  <View>
    <CounterBar/>
    <View style={style.CreatePost}>
      <View style={style.LinkContainer}>
      <TouchableOpacity onPress={() => { navigate('CreateLinkPost')}} ><Image source ={link2}/></TouchableOpacity>
      </View>
      <View style={style.PicContainer}>
      <TouchableOpacity onPress={() => { navigate('MyCameraRoll')}} ><Image source ={camera2}/></TouchableOpacity>
      </View>
      <View style={style.TextContainer}>
      <TouchableOpacity onPress={() => { navigate('CreateTextPost')}} ><Image source ={createtextpost2}/></TouchableOpacity>
      </View>
    </View>

      <PostList  PostData={this.state.PostData} navigation={this.props.navigation}/>
      <FriendRequest/>
  </View>
    );
  }

}


export default Main;
