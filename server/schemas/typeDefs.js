const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Type Defs here
  type Event {
    _id: ID
    creator: User
    name: String
    body: String
    creation_date: Data
    location: String
    address: String
    attending: [User]
  }

  type User {
    _id: ID
    email: String
    username: String
    password: String
    creation_date: Date
    events: [Event]
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  # We will need type Auth after setting up JWT

  type Mutation {
    newUser(email: String!, username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
