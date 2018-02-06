import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {navReducer}  from '../reducers'; //authReducer, loadingReducer, errorMessageReducer,
import authReducer from '../reducers/authReducer';
import regReducer from '../reducers/regReducer';
import childrenReducer from '../reducers/childrenReducer';
const configure = (initialState = {}) => {
  const REDUCERS_OBJECT = {
    nav: navReducer,
    auth: authReducer,
    reg: regReducer,
    childrenReducer
    // error: errorMessageReducer,
  };
  const reducer = combineReducers(REDUCERS_OBJECT);
  const store = createStore(reducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));
  return store;
};
export { configure };