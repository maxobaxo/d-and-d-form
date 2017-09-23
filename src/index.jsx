import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import alignReducer from './reducers/align-reducer';
import alignModalReducer from './reducers/align-modal-reducer';
import createButtonReducer from './reducers/create-button-reducer';
import showDiceReducer from './reducers/show-dice-reducer';
import showProfileReducer from './reducers/show-profile-reducer';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const reducer = combineReducers({
  characterList: alignReducer,
  isModalVisible: alignModalReducer,
  isButtonHidden: createButtonReducer,
  areDiceVisible: showDiceReducer,
  isProfileUp: showProfileReducer
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
