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
  HeaderLogo: {
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
    width: 50,
    height: 50,
    // resizeMode: 'contain',
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
  View4: {
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
  SignUp3: {
    //flex: 1,
    alignItems: 'center',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    width: 400,
    height: 50,
    //lineHeight: 22,
    //textAlign: 'center',
    //justifyContent: 'center',
    backgroundColor: '#00CCFF',
  },
  SignUp4: {
    //flex: 1,
    alignItems: 'center',
    // fontFamily: 'Avenir, sans-serif',
    //fontSize: 16,
    width: 400,
    height: 50,
    //lineHeight: 22,
    //textAlign: 'center',
    //justifyContent: 'center',
    backgroundColor: '#FF2BDC',
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
  container5: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'flex-end',
    //textAlign: 'center',
    //alignItems: 'center',
  //justifyContent:'center',
  marginTop: 30,
  borderBottomWidth: 1,
  borderColor: "#5A5858",
//    paddingTop: 200,
//    fontSize: 16,
//    lineHeight: 30,
      //color: 'white',
    //backgroundColor: '#373435',
  },
  container6: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'space-between',
      alignItems: 'center',
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
  swipe2: {
    flex: 1,
    //flexDirection: 'row',
    //textAlign: 'center',
    //color: 'white',
   alignItems: 'center',
   justifyContent: 'center',
  //  marginBottom: 100,
  },
  swipe3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeArrow: {
      flex: 0,
      flexDirection: 'row',
      justifyContent:'flex-end',
      width: 30,
      height: 30,
      resizeMode: 'contain',
  },
  swipeText: {
      flex: 0,
      flexDirection: 'row',
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
    paddingLeft: 8,
    //paddingBottom: 8,
  },
  TextField2: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    //backgroundColor: 'red',
    borderColor: '#5A5858',
    color: '#D6D6D6',
    //borderRadius: 9,
    //justifyContent: 'space-between',
    borderBottomWidth: 1,
    //borderColor: '#FFF',
   alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 15,
    //marginRight: 15,
    // marginLeft: 15,
    marginLeft: 15,
    //paddingTop: 8,
    //paddingRight: 8,
    // paddingLeft: 8,
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
  WebPreview: {
    width: 350,
    height: 200,
    borderColor: '#5A5858',
    borderWidth: 1,
    marginTop: 15,
    textAlign: 'center',
},
WebPreview2: {
  width: 325,
  height: 100,
  borderColor: '#5A5858',
  borderWidth: 1,
  marginTop: 15,
  justifyContent: 'center',
  alignItems: 'center',
},
  TextField4: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    //backgroundColor: 'red',
    //borderColor: '#FFF',
    color: '#D6D6D6',
    //borderRadius: 9,
    //justifyContent: 'space-between',
    //borderBottomWidth: 1,
    //borderColor: '#5A5858',
   //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 50,
    //marginRight: 15,
    //marginLeft: 15,
    //paddingTop: 30,
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
  Email2: {
  //  borderBottomWidth: 1,
    //borderColor: '#FFF',
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
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
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 8,
    paddingRight: 10,
    paddingLeft: 10,
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
    paddingTop: 3,
    paddingBottom: 3,
  },
  CounterBoxMain2: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFA21F',
    paddingTop: 2,
    paddingBottom: 2,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  MiddleContainer: {
    flex: 8,
    justifyContent: 'center',
  },
  RightContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  ProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    marginBottom: 4,
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
  PlaneText2: {
    fontFamily: 'DIN Condensed',
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 15,
  },
  PlaneText3: {
    fontFamily: 'DIN Condensed',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlign: 'center',
    marginTop: 15,
  },
  LogInText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  textText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#D6D6D6',
  },
  SearchOne: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#373435',
    paddingTop: 3,
    paddingBottom: 6,
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
    //resizeMode: 'contain',
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
    paddingTop: 30,
    paddingBottom: 20,
  },
  Video: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
  },
  welcomeTitle2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
  },
  welcomeContinue: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 40,
  },
  PostCreateHeader: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#373435',
    height: 50,
  },
  LeftArrow: {
    flex: 1,
    //resizeMode: 'contain',
    width: 10,
    paddingLeft: 12,
  },
  FriendHeader: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#FFA21F',
    height: 50,
  },
  FriendView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  BirthdayView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#373435',
    //paddingTop: 70,
    paddingBottom: 20,
  },
  cathedral: {
    resizeMode: 'cover',
  },
});


export default styles;
