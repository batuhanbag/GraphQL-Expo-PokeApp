import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Label({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.labelContainer}>
        {data.map((item, id) => (
          <Text key={id} style={styles.label}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
  },
  labelContainer: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  label: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#999",
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: "#f1f1f1",
  },
});
