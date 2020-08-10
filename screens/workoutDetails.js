import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../shared/card";

export default function WorkoutDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('days')}</Text>
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
