import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Post from './Post'

class PostList extends React.Component {
  render(){
    return (
        <View>
        <Text> Post List :</Text>
        <Text>             </Text>
        {
        this.props.PostData.map((item,index) => {
          return <Post information={item} key={index} />
        })
      }
        </View>
    );
  }

}


export default PostList;
