 // this store will be applicable or available throughout the application
import {createStore} from 'redux';
import rootReducer from './combineReducer';

const store= createStore(rootReducer);

export default store;