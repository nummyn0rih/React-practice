import React from 'react';
import '../App.css';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div class="btn-group" role="group">
          <button type="button" class="btn hexlet-inc">+</button>
          <button type="button" class="btn hexlet-dec">-</button>
        </div>
      </div>
    );
  }
}