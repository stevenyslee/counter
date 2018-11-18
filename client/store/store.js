import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/rootReducer.js';

export const store = createStore(rootReducer);
