import { gql } from "apollo-boost";

export const POKEMONS_QUERY = gql`
  {
    pokemons(first: 100) {
      id
      name
    }
  }
`;
