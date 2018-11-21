import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/rootReducer.js';

const store = createStore(rootReducer);

console.log(store.getState());

export default store;
