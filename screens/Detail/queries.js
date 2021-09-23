import { gql } from "apollo-boost";

export const POKEMONS_QUERY = gql`
  query Pokemon($id: String) {
    pokemon(id: $id) {
      id
      name
      types
      weaknesses
      evolutions {
        id
        name
      }
    }
  }
`;
