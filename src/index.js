import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducer'

// const store = createStore(rootReducer);

const loadState = () => {
  const serializedState = localStorage.getItem('state');
  if (!serializedState) {
    return undefined;
  }
  return JSON.parse(serializedState);
}
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

store.subscribe( () => {
  saveState( store.getState() )
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();