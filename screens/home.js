import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, Modal } from 'react-native';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';

export default function Home({navigation}) {
    const [modalOpen, setModalOpen ] = useState(false);

    const [workouts, setWorkouts] = useState([
        {title: 'StrongLifts 5x5 Workout', 
        days: ['Day A', 'Day B'],
        loggedWorkouts: [
          {day: 'Day A', 
          dateLogged: '08/01/2020', 
          backSquat:{weight:300, sets: 5, reps: 5},
          barbellBenchPress:{weight:200, sets: 5, reps: 5},
          barbellRow:{weight:200, sets: 5, reps: 5}
          },
          {day: 'Day B', 
          dateLogged: '08/03/2020', 
          backSquat:{weight:305, sets: 5, reps: 5},
          overheadPress:{weight:150, sets: 5, reps: 5},
          deadlift:{weight:300, sets: 5, reps: 5}
          }
        ]
      },
        {title: 'Fullbody Workout',
         days: ['Day 1', 'Day 2', 'Day 3']
      }
    ])

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Here are your work outs!</Text>
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
        <SafeAreaView style={styles.bottomTab}>
          <MaterialIcons
            name="timeline"
            size={40}
            style={styles.modalToggle}
          />

          <MaterialIcons
            name="home"
            size={40}
            style={styles.modalToggle}
          />

          <MaterialIcons
            name="info"
            size={40}
            style={styles.modalToggle}
          />
        </SafeAreaView>

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
    header:{
      fontSize: 18,
      marginVertical: 20,
    },
    modalToggle:{
        marginBottom: 10, 
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10, 
        borderRadius: 10,
        alignSelf: 'center',
    },
    bottomTab:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between"
    }
})