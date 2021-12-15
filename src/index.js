import React from 'react';
import {render} from 'react-dom';
import {RecoilRoot} from 'recoil';
import 'todomvc-app-css/index.css';
import App from './components/App';

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
)
