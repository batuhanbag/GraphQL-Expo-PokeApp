import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("Detail", {
          id: item.id,
          name: item.name,
        })
      }
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/artwork/large/${item.name.toLowerCase()}.jpg`,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#DDE2E6",
  },

  image: {
    width: 100,
    height: 100,
  },

  name: {
    fontSize: 24,
    marginLeft: 10,
  },
});
