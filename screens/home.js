import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Card from '../shared/card'

export default function Home({navigation}) {
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
            <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetails', item)}>
              <Card>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})