const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Event {
    _id: ID
    creator: User
    name: String
    body: String
    creation_date: Date
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

  # This is what we return from our newUser and login mutations
  type Auth {
    token: ID!
    user: User
  }

  # This is what Mongo returns when we delete a document
  type DeletedCount {
    deletedCount: Int
  }

  type Query {
    users: [User]!
    user(username: String!): User
    me: User
    event: Event
    events(location: String!): [Event]
  }

  type Mutation {
    newUser(email: String!, username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    newEvent(
      name: String!
      body: String!
      location: String!
      address: String!
    ): Event
    deleteEvent(id: ID!): DeletedCount
    attendEvent(id: ID!): Event
    unAttendEvent(id: ID!): Event
  }
`;

module.exports = typeDefs;
