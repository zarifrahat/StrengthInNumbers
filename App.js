import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';

export default function App() {
  const[name, setName] = useState("Zarif");
  const clickHandler = ()=>{
      setName("Zarif Rahat");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello {name}!</Text>
      <TouchableOpacity>
        <Image source={
          {
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }
        } />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <TextInput style={styles.input}
        placeholder="Name"
        onChangeText={(val)=> setName(val)}/>
      <Button title="update name"
        onPress={clickHandler}/>
    </SafeAreaView>
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
