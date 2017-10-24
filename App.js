/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var MemoryStore = require('./lib/memoryStore');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    
    this.state = {
      test: 1
    }
  }
  render() {
    console.log('====', MemoryStore);
    
    MemoryStore.getItem('key', (err, value) => {
      console.log(err, value)
    })

    if (this.state.test == 4){
      MemoryStore.setItem('key', 'Quang Khuong Duy', (er) => {
        console.log(er);
      })
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          this.setState({
            test: this.state.test +1
          })
        }}>
          <Text style={styles.welcome}>
            Welcome {this.state.test} !
        </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
