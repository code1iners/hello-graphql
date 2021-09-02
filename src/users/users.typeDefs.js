import { gql } from "apollo-server-core";

export default gql`
  type Query {
    hello: String
    bye: String
  }
`;
