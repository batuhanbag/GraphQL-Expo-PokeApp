import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

//Screens
import Pokemons from "./screens/Home/Pokemons";
import PokemonDetail from "./screens/Detail/PokemonDetail";

const HomeStack = createStackNavigator();
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokemon2.vercel.app",
  }),

  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer
        theme={{
          colors: {
            background: "#fff",
            card: "#ff5722",
            text: "#fff",
          },
        }}
      >
        <HomeStack.Navigator>
          <HomeStack.Screen name="Pokemons" component={Pokemons} />
          <HomeStack.Screen
            name="Detail"
            component={PokemonDetail}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
