import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';


export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>You are on the Home screen</Text>
            <TextInput></TextInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})