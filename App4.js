import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, SafeAreaView} from 'react-native';
import Icons from './components/Icons';


const App4 = () => {
const arrayList = new Array(9);
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TIC TAC TOE Game</Text>
        <View>
        <Icons/>
        {arrayList.map((item,index)=>{
          <Text>Name</Text>

        })}
        </View>
    </SafeAreaView>
  );
};

export default App4;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'skyblue',
  },
  title:{
    color:"white",
    fontSize:20,
    // alignSelf:'center',
    padding:10,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'darkblue'
  }
})
