import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../shared/card";

export default function WorkoutDetails({ navigation }) {
  const daysArray = navigation.getParam('days');
  const listedDays = daysArray.map(ele => {
      return (
        <Text>
          {ele}
        </Text>
      )
    });

  const allWorkouts = navigation.getParam('loggedWorkouts');
  const lastWorkout= allWorkouts[allWorkouts.length-1];
  const indexOfLastWorkout = daysArray.indexOf(lastWorkout.day);
  const stringOfNextWorkout = daysArray[(indexOfLastWorkout+1) % daysArray.length];

  return (
    <SafeAreaView style={styles.container}>
      <Text>Last workout logged: {lastWorkout.day}</Text>
      <Text>on {lastWorkout.dateLogged}</Text>
      <Text>Today is {stringOfNextWorkout}!</Text>
        <Card>
            <Text>{navigation.getParam('title')}</Text>
            <SafeAreaView>
                {listedDays}
            </SafeAreaView>
        </Card>
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
