import { gql } from '@apollo/client';

export const GET_EVENTS_BY_LOCATION = gql`
  query events($location: String!) {
    events(location: $location) {
      _id
      # creator
      name
      body
      location
      address
      latitude
      longitude
      # attending
    }
  }
`;

export const QUERY_USER = gql`
  {
    user
  }
`;
