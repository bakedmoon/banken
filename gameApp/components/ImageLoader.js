import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ImageDisplayer extends React.Component {
  render() {
    let pic = {
      uri: this.props.url
    };
    return (
      <Image source={pic} style={{width: '100%', height: '100%'}}/>
    );
  }
}