import {
  SET_LOCATION,
  UPDATE_EVENTS,
  REMOVE_EVENT,
  ADD_TO_MY_EVENTS,
  SET_LON_LAT,
  SET_USER,
} from './actions';

import Auth from '../auth'


export default function reducer(state, action) {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case SET_USER: {
      console.log(action.user)
      return ({
        ...state,
        user: action.user,
      });
    }
    
    case ADD_TO_MY_EVENTS:
      return {
        ...state,
        attendingEvents: [...state.attendingEvents, action.payload.event],
      };

    case UPDATE_EVENTS:
      return {
        ...state,
        events: [...action.payload.events],
      };

    case REMOVE_EVENT:
      let newState = state.events.filter((event) => {
        return event._id !== action._id;
      });

      return {...state, events: newState};

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
