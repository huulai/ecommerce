import { gql } from 'graphql-request';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;
