import { SET_LOCATION, SET_LON_LAT } from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_LON_LAT: {
      return {
        ...state,
        longitude: action.payload.lon,
        latitude: action.payload.lat,
      };
    }
    default: {
      return state;
    }
  }
}
