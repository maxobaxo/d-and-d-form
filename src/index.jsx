import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import alignReducer from './reducers/align-reducer';
import alignModalReducer from './reducers/align-modal-reducer';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const reducer = combineReducers({
  characterList: alignReducer,
  isModalVisible: alignModalReducer
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
