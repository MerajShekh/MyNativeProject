import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

const App2 = () => {
  const [uri, setUri] = useState(dice1);
  const [scor, setScor] = useState(0);

  const changeDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setUri();
    setScor(scor + randomNumber);

    switch (randomNumber) {
      case 1:
        setUri(dice1);
        break;
      case 2:
        setUri(dice2);
        break;
      case 3:
        setUri(dice3);
        break;
      case 4:
        setUri(dice4);
        break;
      case 5:
        setUri(dice5);
        break;
      case 6:
        setUri(dice6);
        break;

      default:
        setUri(dice1);
        break;
    }
  };

  const resetGame = () => {
    setScor(0);
    setUri(dice1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score : {scor}</Text>
      <TouchableOpacity onPress={changeDice}>
        <Image source={uri} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resetBtn} onPress={resetGame}>
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },
  score: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    top: -30,
  },
  image: {
    width: 80,
    height: 80,
  },
  resetBtn: {
    backgroundColor: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
    top: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
