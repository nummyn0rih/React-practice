import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyForm from './Components/MyForm';
import Component from './Components/Component';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyForm />, document.querySelector('.form'));
ReactDOM.render(<Component />, document.querySelector('.component'));


serviceWorker.unregister();
