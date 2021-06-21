import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, Store } from 'redux';
import { AppAction } from './store/actions/types';
import { AppState, Dispatch } from './store/types/types';
import { appReducer } from './store/reducers/appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { RootHOC } from './hocs/RootHOC/RootHOC';

const store: Store<AppState, AppAction> & {
  dispatch: Dispatch
} = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <RootHOC/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
