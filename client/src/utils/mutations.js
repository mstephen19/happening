import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation newUser($email: String!, $username: String!, $password: String!) {
    newUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
