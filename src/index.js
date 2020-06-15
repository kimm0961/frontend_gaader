import React from 'react';
import ReactDOM from 'react-dom';

// bootswatch css
// import 'bootswatch/dist/cerulean/bootstrap.min.css'; 
// bootstrap css (eller scss)
import 'bootstrap/dist/css/bootstrap.css';
// eller den minimerede version:
// import 'bootstrap/dist/css/bootstrap.min.css';

// bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
