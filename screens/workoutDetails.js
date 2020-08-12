import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../shared/card";

export default function WorkoutDetails({ navigation }) {
  const daysArray = navigation.getParam('days');
  
  const allWorkouts = navigation.getParam('loggedWorkouts');
  const lastWorkout= allWorkouts[allWorkouts.length-1];
  const indexOfLastWorkout = daysArray.indexOf(lastWorkout.day);
  const stringOfNextWorkout = daysArray[(indexOfLastWorkout+1) % daysArray.length];
  
  let allWorkoutsDetails = []; 
  
  if(allWorkouts.length >= daysArray.length){
    let i = daysArray.length;
    let j = allWorkouts.length-1;
    while(i > 0){
      allWorkoutsDetails.push(allWorkouts[j])
      i--;
      j--;
    }
  }else{
    let i = allWorkouts.length;
    while (i > 0) {
      allWorkoutsDetails.push(allWorkouts[i-1]);
      i--;
    }
  }

  const workoutCards = allWorkoutsDetails.map(workout => {
    let workoutKeys = Object.keys(workout).filter(key => key !== 'day' && key!== 'dateLogged')
    console.log(workoutKeys)
    const allExercises = workoutKeys.map(key =>{
      return(
        <Text>{key}: {workout[key].sets} x {workout[key].reps} @ {workout[key].weight} lbs</Text>
      )
    })
    return(
      <Card>
        <Text>{workout.day}</Text>
        <Text>Done on: {workout.dateLogged}</Text>
        {allExercises}
      </Card>
    )
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>Last workout logged: {lastWorkout.day}</Text>
      <Text>on {lastWorkout.dateLogged}</Text>
      <Text>Today is {stringOfNextWorkout}!</Text>
      <Card>
        
      </Card>
      <Text>Last {daysArray.length} workouts</Text>
      {workoutCards}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
