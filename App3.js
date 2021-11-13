import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupees = {
  DOLLAR: 0.013,
  EURO: 0.012,
  POUND: 0.021,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.061,
  BITCOIN: 0.000004,
};

const App3 = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a Value',
        backgroundColor: '#E6425E',
      });
    }

    const resutl = parseFloat(inputValue) * currencyPerRupees[currency];
    setResultValue(resutl.toFixed(2));
  };
  return (
    <ScrollView
      backgroundColor="#03203C"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter Rs. Value"
            placeholderTextColor="#EDC126"
            value={inputValue}
            onChangeText={inputValue => setInputValue(inputValue)}
          />
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupees).map(currency => (
            <TouchableOpacity
              key={currency}
              style={styles.convertButton}
              onPress={() => buttonPressed(currency)}>
              <Text style={{color: '#fff'}}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#CAD5E2',
    height: 70,
    marginTop: 80,
  },
  resultValue: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#CAD5E2',
    marginTop: 10,
    height: 70,
  },
  input: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#CAD5E2',
    backgroundColor: '#207398',
    marginTop: 10,
  },
});
