import { createStore } from 'redux';
import userReducer from './useReducer';

// Create a Redux store and pass in the userReducer
const store = createStore(userReducer);

export default store;
