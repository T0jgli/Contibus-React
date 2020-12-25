import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/store';
import { BrowserRouter as Router } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-image-lightbox/style.css';

import ReactGA from 'react-ga';
import App from './App';
import './css/index.css';
import './css/print.scss'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_GAID)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('index')
);