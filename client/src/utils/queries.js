import { gql } from '@apollo/client';

export const GET_EVENTS_BY_LOCATION = gql`
  query events($location: String!) {
    events(location: $location) {
      _id
      creator {
        _id
        username
      }
      name
      body
      location
      address
      latitude
      longitude
      attending {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query me{
    me{
      events {
      name
      body
      location
      address
      attending {
        username
      }
      }
    }
  }
`;

export const GET_EVENTS_CREATED_BY_USER = gql`
  query eventsByUser {
    eventsByUser {
      _id
      name
      body
      location
      day
      address
      attending {
        username
      }
    }
  }
`;