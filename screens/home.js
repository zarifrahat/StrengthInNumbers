import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, Modal } from 'react-native';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';

export default function Home({navigation}) {
    const [modalOpen, setModalOpen ] = useState(false);

    const [workouts, setWorkouts] = useState([
        {title: 'StrongLifts 5x5 Workout', days: ['Day A', 'Day B']},
        {title: 'Fullbody Workout', days: ['Day 1', 'Day 2', 'Day 3']}
    ])

    return (
      <SafeAreaView style={styles.container}>
        <Text>You are on the Home screen</Text>
        <FlatList
          data={workouts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("WorkoutDetails", item)}
            >
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />

        <MaterialIcons
          name="add"
          size={40}
          onPress={() => setModalOpen(true)}
          style={styles.modalToggle}
        />

        <Modal visible={modalOpen} animationType="slide">
          <SafeAreaView style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={40}
              onPress={() => setModalOpen(false)}
              style={styles.modalToggle}
            />
          </SafeAreaView>
        </Modal>
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
    modalToggle:{
        marginBottom: 10, 
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10, 
        borderRadius: 10,
        alignSelf: 'center',
    }
})