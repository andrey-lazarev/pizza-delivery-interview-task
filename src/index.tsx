import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore, Store } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { AppState, Dispatch } from './store/types/types';
import { AppAction } from './store/actions/types';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './store/reducers/appReducer';
import { RootHOC } from './hocs/RootHOC/RootHOC';

const store: Store<AppState, AppAction> & {
  dispatch: Dispatch
} = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={ store }>
    <RootHOC/>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
