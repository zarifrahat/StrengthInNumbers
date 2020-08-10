import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

export default function Card(props){

    return (
      <SafeAreaView style={styles.card}>
        <SafeAreaView style={styles.cardContent}>
            {props.children}
        </SafeAreaView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 20,
    }
})