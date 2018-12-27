import React, { Component } from 'react';
import { Image, View } from 'react-native';

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../img/jokenpo.png')} />
      </View>
    );
  }
}

export default Topo;