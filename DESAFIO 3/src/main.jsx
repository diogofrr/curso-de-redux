import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import './assets/global.css';
import { Provider } from 'react-redux';

import store from './store/configureStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </React.StrictMode>,
);
