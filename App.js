import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import Home from './screens/home'
import Navigator from './routes/homeStack'

export default function App() {
  const[name, setName] = useState("Zarif");
  const clickHandler = ()=>{
      setName("Zarif Rahat");
  }
  const removenameclickHandler = ()=>{
      setName("");
  }

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  }
});
