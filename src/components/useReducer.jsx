// useReducer.js

import { UPDATE_NAME, UPDATE_EMAIL } from './action';

// Initial state
const initialState = {
  name: '',
  email: '',
};

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
