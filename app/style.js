import React from 'react';
import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create ({
default: {
  fontSize: 20,
  color: '#FFFFFF',
  //backgroundColor: '#373435',
},
  View: {
    flex: 1,
    //flexGrow: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    //alignItems: 'flex-end',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#373435',
  },
  Pic: {
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    //justifyContent: 'space-around',
    //textAlign: 'center',
    alignItems: 'center',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#373435',
    //paddingBottom: 20,
  },

  Pic2: {
    //flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    //textAlign: 'center',
    alignItems: 'flex-start',
    //position: 'absolute',
    //bottom: 0,
    //backgroundColor: '#373435',
  },
  SignUp: {
    flex: 1,
    //alignItems: 'flex-end',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    //width: 200,
    //lineHeight: 22,
    //textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#FF2BDC',
  },
  LogIn: {
    flex: 1,
    //alignItems: 'flex-end',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    //width: 200,
    //lineHeight: 22,
    //textAlign: 'center',
    color: 'white',
    backgroundColor: '#00CCFF',
  },
  // TextField: {
  //   // fontFamily: 'Avenir, sans-serif',
  //   fontSize: 30,
  //   lineHeight: 19,
  //   color: '#D6D6D6',
  // },
  // Prompt: {
  //   // fontFamily: 'DINCondensedBold, sans-serif',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  //   lineHeight: 30,
  //   color: '#FFFFFF',
  // },
  container: {
      //flex: 1,
      flexDirection: 'row',
      //justifyContent: 'space-between',
      //textAlign: 'center',
      //alignItems: 'flex-start',
    justifyContent:'flex-end',
  //    paddingTop: 200,
  //    fontSize: 16,
  //    lineHeight: 30,
        //color: 'white',
      backgroundColor: '#373435',
      color: '#D6D6D6',
  },
  input: {
    //flex: 0,
    //alignItems: 'flex-start',
    //justifyContent: 'left',
    //flexDirection: 'row',
    //  margin: 15,
     height: 40,
     //borderColor: 'grey',
     //borderWidth: 1,
     fontWeight: 'bold',
     fontSize: 16,
    //  lineHeight: 30,
     color: '#D6D6D6',
     textAlign: 'left',
  },
  swipe: {
    //flex: 1,
    textAlign: 'center',
    color: 'white',
    alignItems: 'flex-start',
  },
  TextField: {
    fontFamily: 'Avenir Next',
    fontSize: 30,
    lineHeight: 19,
    color: '#D6D6D6',
  },
  Prompt: {
    fontFamily: 'DIN Condensed',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  PostLinkBoxMain: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#5A5858',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 8,
  },
  PostLinkBoxSub: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  SenderName: {
    justifyContent: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 24,
    textAlign: 'left',
    color: '#000000',
  },
  CreatorName: {
    justifyContent: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 16,
    textAlign: 'left',
    color: '#000000',
  },
  PostIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  CounterBoxMain: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#373435',
    paddingTop: 8,
    paddingBottom: 8,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  RightContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'right',
    color: '#FFFFFF',
  },
  CounterLeft: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    textAlign: 'left',
    color: '#D6D6D6',
    marginLeft: 15,
  },
  CounterRight: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    textAlign: 'right',
    color: '#D6D6D6',
    marginRight: 15,
  },
  CreatePost: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  LinkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA21F',
    paddingTop: 8,
    paddingBottom: 8,
  },
  PicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2BDC',
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CCFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
});


export default styles;
