import {UPDATE_EVENTS} from './actions';

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
    default:
      return state;
  }
};

export default reducer;
