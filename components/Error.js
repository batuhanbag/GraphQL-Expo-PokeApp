import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Error() {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>
        Please wait a few minutes before you try again.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  error: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff5722",
  },
});
