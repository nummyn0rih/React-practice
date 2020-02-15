import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MyForm from './Components/MyForm';
import Component from './Components/Component';
import TodoBox from './Components/TodoBox';
import Card from './Components/Card';
import ModalComponent from './Components/ModalComponent';
import Autocomplete  from './Components/Autocomplete';
import Clock from './Components/Clock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Clock />, document.querySelector('.clock'));
ReactDOM.render(<Autocomplete />, document.querySelector('.autocomplete'));
ReactDOM.render(<ModalComponent />, document.querySelector('.mod'));

const card = (
  <Card>
    <Card.Body>
      <Card.Title>Title 3</Card.Title>
      <Card.Text>Text 3</Card.Text>
    </Card.Body>
  </Card>
);
ReactDOM.render(card, document.querySelector('.card'));

ReactDOM.render(<MyForm />, document.querySelector('.form'));
ReactDOM.render(<Component />, document.querySelector('.component'));
ReactDOM.render(<TodoBox />, document.querySelector('.todo'));
// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
