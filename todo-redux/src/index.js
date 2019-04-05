import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'reac-redux'
import {createStore} from 'redux'
import reducers from './redux/reducers'
import './index.css';

ReactDOM.render(
<Provider store={createStore(reducers)}>

  <App/>

  <Provider/>

  document.getElementById('root'));