import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { POKEMONS_QUERY } from "./queries";
import Label from "../../components/Label";
import Evolutions from "../../components/Evolutions";

export default function PokemonDetail({ route }) {
  const { id } = route.params;

  const { error, loading, data } = useQuery(POKEMONS_QUERY, {
    variables: {
      id: id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { name, types, weaknesses, evolutions } = data.pokemon;

  return (
    <ScrollView>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Label data={types} title="Types" />
      <Label data={weaknesses} title="Weaknesses" />
      <Evolutions data={evolutions} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginVertical: 20,
  },

  name: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
});
