import { SET_LOCATION } from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
