import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import reducer from './reducers/main-reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);

RenderDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root');
);
