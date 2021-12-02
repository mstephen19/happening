const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  scalar Date

  type User {
    _id: ID
    email: String
    username: String
    password: String
    creation_date: Date
    events: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String!): User
    me: User
  }

  type Mutation {
    newUser(email: String!, username: String!, password: String!): User
    login(username: String!, password: String!): Auth
    newEvent(
      name: String!
      body: String!
      location: String!
      address: String!
    ): Event
    attendEvent(id: ID!): Event
    unAttendEvent(id: ID!): Event
  }
`;

module.exports = typeDefs;
