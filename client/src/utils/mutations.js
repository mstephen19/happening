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

export const CREATE_EVENT = gql`
  mutation newEvent(
    $name: String!
    $body: String!
    $location: String!
    $address: String!
    $day: Date!
  ) {
    newEvent(name: $name, body: $body, location: $location, address: $address, day: $day) {
      _id
      name
      body
      location
      address
      latitude
      longitude
      day
    }
  }
`;


export const ADD_COMMENT = gql`
mutation addComment(
  $eventId: ID!
  $content: String!
) {
  addComment(eventId: $eventId, content: $content) {
    _id
    # comments
  }
}
`

export const DELETE_EVENT = gql`
mutation deleteEvent($id: ID!){
  deleteEvent(id: $id){
    deletedCount
  }
}
`;

