import React from 'react';
import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create ({
// default: {
//   fontSize: 20,
//   //color: '#FFFFFF',
//   //backgroundColor: '#373435',
// },
  View: {
    flex: 1,
    //flexGrow: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    //textAlign: 'center',
    //alignItems: 'flex-end',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#373435',
  },
  LogInLogo: {
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  View2: {
    flex: 1,
    //flexGrow: 0,
    flexDirection: 'column',
    //justifyContent: 'center',
    //textAlign: 'center',
    alignItems: 'center',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#373435',
  },
  View3: {
    flex: 1,
    //flexGrow: 0,
    flexDirection: 'column',
    //width: 400,
    justifyContent: 'space-between',
    //textAlign: 'center',
    alignItems: 'center',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#FFFFFF',
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
  Pic3: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    //justifyContent: 'space-around',
    //textAlign: 'center',
    alignItems: 'flex-start',
    //position: 'absolute',
    //bottom: 0,
    backgroundColor: '#FFFFFF',
    //paddingBottom: 20,
  },
  SignUp: {
    flex: 1,
    alignItems: 'center',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    //width: 200,
    //lineHeight: 22,
    //textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF2BDC',
  },
  SignUp2: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    //width: 400,
    //lineHeight: 22,
    //textAlign: 'center',
    backgroundColor: '#FFA21F',
    height: 45,
  },
  LogIn: {
    flex: 1,
    //flexDirection: 'column',
    //alignItems: 'flex-end',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    width: 200,
    //lineHeight: 22,
    //textAlign: 'center',
    backgroundColor: '#00CCFF',

  },
  LogIn2: {
    //flex: 1,
    width: 400,
    marginBottom: 10,
    //flexDirection: 'column',
    //alignItems: 'flex-end',
    //lineHeight: 22,
    //textAlign: 'center',
    backgroundColor: '#00CCFF',
  },
  LogIn3: {
    //flex: 1,
    width: 400,
    //flexDirection: 'column',
    //alignItems: 'flex-end',
    //lineHeight: 22,
    //textAlign: 'center',
    backgroundColor: '#373435',
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
      alignItems: 'center',
    justifyContent:'flex-end',
  //    paddingTop: 200,
  //    fontSize: 16,
  //    lineHeight: 30,
        //color: 'white',
      backgroundColor: '#373435',
  },
  container2: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'space-between',
      //textAlign: 'center',
      //alignItems: 'flex-start',
    //justifyContent:'flex-start',
  //    paddingTop: 200,
  //    fontSize: 16,
  //    lineHeight: 30,
        //color: 'white',
      //backgroundColor: '#373435',
  },
  container3: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'space-between',
      //alignItems: 'center',
      justifyContent: 'center',
      //textAlign: 'center',
      //alignItems: 'center',
    //justifyContent:'flex-end',
  //    paddingTop: 200,
  //    fontSize: 16,
  //    lineHeight: 30,
        //color: 'white',
      backgroundColor: '#FFFFFF',
  },
  container4: {
    //flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    //textAlign: 'center',
    //alignItems: 'center',
  //justifyContent:'flex-end',
//    paddingTop: 200,
//    fontSize: 16,
//    lineHeight: 30,
      //color: 'white',
    //backgroundColor: '#373435',
  },
  input: {
    flex: 1,
    //justifyContent: 'space-between',
    //alignItems: 'stretch',
    //justifyContent: 'center',
    flexDirection: 'row',
    //  margin: 15,
     //height: 40,
     //borderColor: 'grey',
     //borderWidth: 1,
     //fontWeight: 'bold',
     //fontSize: 16,
    //  lineHeight: 30,
     //color: '#D6D6D6',
     //textAlign: 'left',
  },
  swipe: {
    flex: 1,
    //flexDirection: 'row',
    //textAlign: 'center',
    //color: 'white',
   alignItems: 'center',
   justifyContent: 'center',
  },
  TextField: {
    width: 350,
    height: 50,
    //backgroundColor: 'red',
    borderColor: '#5A5858',
    //color: '#D6D6D6',
    //borderRadius: 9,
    //justifyContent: 'space-between',
    borderWidth: 1,
  //  alignItems: 'center',
  //  justifyContent: 'center',
    marginTop: 15,
    //marginRight: 15,
    //marginLeft: 15,
    //paddingTop: 8,
    //paddingRight: 8,
    //paddingLeft: 8,
    //paddingBottom: 8,
  },
  TextField2: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    //backgroundColor: 'red',
    //borderColor: '#5A5858',
    //color: '#D6D6D6',
    //borderRadius: 9,
    //justifyContent: 'space-between',
    //borderWidth: 1,
    //borderColor: '#5A5858',
  //  alignItems: 'center',
  //  justifyContent: 'center',
    //marginTop: 15,
    //marginRight: 15,
    //marginLeft: 15,
    //paddingTop: 8,
    //paddingRight: 8,
    //paddingLeft: 8,
    //paddingBottom: 8,
  },
  TextField3: {
    width: 350,
    height: 200,
    //backgroundColor: 'red',
    borderColor: '#5A5858',
    //color: '#D6D6D6',
    //borderRadius: 9,
    //justifyContent: 'space-between',
    borderWidth: 1,
    //borderColor: '#5A5858',
  //  alignItems: 'center',
  //  justifyContent: 'center',
    marginTop: 15,
    //marginRight: 15,
    //marginLeft: 15,
    //paddingTop: 8,
    //paddingRight: 8,
    //paddingLeft: 8,
    //paddingBottom: 8,
  },
  Email: {
    borderBottomWidth: 1,
    borderColor: '#5A5858',
    flexDirection: 'row',
    margin: 15,
    //justifyContent: 'center',
  },
  Prompt: {
    fontFamily: 'DIN Condensed',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
    //color: '#FFFFFF',
  },
  FriendRequestBox: {
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
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 8,
  },
  AcceptIcon: {
    flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    resizeMode: 'contain'
  },
  DeclineIcon: {
    flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    resizeMode: 'contain'
  },
  RequesterBox: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  RequesterName: {
    justifyContent: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 24,
    textAlign: 'center',
    color: '#000000',
  },
  FriendRequestText: {
    justifyContent: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
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
    // resizeMode: 'contain'
    // height: 30,
  },
  CounterBoxMain: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#373435',
    paddingTop: 3,
    paddingBottom: 3,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'center',
    //color: '#FFFFFF',
  },
  MiddleContainer: {
    flex: 8,
    //alignItems: 'center',
    justifyContent: 'center',
    //color: '#FFFFFF',
  },
  RightContainer: {
    flex: 1,
    justifyContent: 'center',
    //textAlign: 'right',
    //color: '#FFFFFF',
  },
  ProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderColor: '#D6D6D6',
    borderWidth: 1,
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
  PlaneText: {
    fontFamily: 'DIN Condensed',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 15,
  },
  LogInText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#D6D6D6',
  },
  SearchOne: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#373435',
    paddingTop: 3,
    paddingBottom: 3,
    alignItems: 'center',
  },
  UserNameContainer: {
    flex: 0,
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  UserName: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#D6D6D6',
    textAlign: 'center',
  },
  SearchTwo: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#5A5858',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    height: 40,
  },
  SearchThree: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchText: {
    flex: 9,
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#D6D6D6',
    textAlign: 'left',
  },
  SearchIcon: {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'contain',
    width: 25,
    alignItems: 'center',
    paddingTop: 3,
  },
  tabtab: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#D6D6D6',
    backgroundColor: '#373435',
    width:250,
    height:250,
    marginRight: 15,
  },
  CheckIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  FriendPass: {
    flex: 6,
    textAlign: 'left',
    justifyContent: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 24,
    color: '#000000',
  },
  FriendBoxMain: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  VideoView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#373435',
    marginTop: 0,
  },
  Video: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
    marginRight: 50,
    marginLeft: 50,
    resizeMode: 'contain',
    // width: 200,
    // height: 200,
  },
  StackNavigator: {
    //flex: 1,
    width: 400,
    marginBottom: 10,
    //flexDirection: 'column',
    //alignItems: 'flex-end',
    //lineHeight: 22,
    //textAlign: 'center',
    backgroundColor: '#00CCFF',
  },
});


export default styles;
