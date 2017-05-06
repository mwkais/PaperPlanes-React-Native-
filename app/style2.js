import React from 'react';
import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create ({
  View: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  },
  RightContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'right',
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
