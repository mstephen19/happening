import {UPDATE_EVENTS, ADD_EVENT, REMOVE_EVENT} from './actions';

const initialState = {
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      return {
        ...state,
        events: [...action.events],
      };

    case REMOVE_EVENT:
      let newState = state.events.filter((event) => {
        return event._id !== action._id;
      });

      return {...state, events: newState};

    default:
      return state;
  }
};

export default reducer;
