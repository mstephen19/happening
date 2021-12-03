import { gql } from '@apollo/client';

export const GET_EVENTS_BY_LOCATION = gql`
  query events($location: String!) {
    events(location: $location) {
      _id
      # creator
      # name
      # body
      # location
      # address
      latitude
      longitude
    }
  }
`;

export const QUERY_USER = gql`
  {
    user
  }
`;

export const GET_EVENTS_CREATED_BY_USER = gql`
  query events($user: ID!){
    events(user: $creator){
      _id
      creator
      name
      body
      location
      address
    }
  }
`;