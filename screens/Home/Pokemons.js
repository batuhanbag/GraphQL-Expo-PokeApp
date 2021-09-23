import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { useQuery } from "@apollo/react-hooks";
import ListItem from "../../components/ListItem";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { POKEMONS_QUERY } from "./queries";

export default function Pokemons() {
  const { error, loading, data } = useQuery(POKEMONS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data.pokemons}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
