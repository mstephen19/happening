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
  {
    user
  }
`;
