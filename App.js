import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('rgb(255,0,150)');

  const changeColor = () => {
    setBgColor(
      'rgb(' +
        Math.floor(Math.random() * 255) +
        ',' +
        Math.floor(Math.random() * 255) +
        ',' +
        Math.floor(Math.random() * 255) +
        ')',
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TouchableOpacity>
        <Text onPress={changeColor} style={styles.text}>
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#ffbf00',
    padding: 15,
    borderRadius: 10,
  },
});
