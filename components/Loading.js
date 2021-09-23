import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff5722" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
