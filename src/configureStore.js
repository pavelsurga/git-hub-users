import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { reducers } from './modules';

const createReducer = () => {
  return combineReducers(reducers)};

export const configureStore = (extra) => {
  const reducer = createReducer();
  const middlewares = [thunk.withExtraArgument(extra)];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      persistState(['users', 'profile']),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }) : arg => arg,
    ),
  );

  return store;
}