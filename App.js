import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  <TextInput
   style={styles.inputBox}
   onChangeText={text => {
     this.setState({ text: text });
   }}
   value={this.state.text}
  />
  <TouchableOpacity
    style={styles.goButton}
    onPress={() => {
      speak();
      
    }}>
  }
}

speak = () =>{
  var thingToSay = this.state.name;
  Speech.speak(thingToSay);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
