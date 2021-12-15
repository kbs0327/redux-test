import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'jotai';
import 'todomvc-app-css/index.css';
import App from './components/App';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
