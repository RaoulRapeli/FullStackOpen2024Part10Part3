import { gql } from '@apollo/client';

export const GET_ACCESSTOKEN = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;