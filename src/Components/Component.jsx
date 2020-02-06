import React from 'react';
import { uniqueId } from 'lodash';
import '../App.css';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      list: [],
    };
  }
  
  removeItem = (id) => (e) => {
    e.preventDefault();
    const { list } = this.state;
    const newList = list.filter((item) => Object.keys(item)[0] !== id);
    this.setState({ list: newList });
  }

  handleInc = () => {
    const { value, list } = this.state;
    const newValue = value + 1;
    const id = uniqueId();
    const newItem = { [id]: <button onClick={this.removeItem(id)} type="button" className="list-group-item list-group-item-action" key={id}>{newValue}</button> };
    const newList = [newItem, ...list];
    this.setState({
      value: newValue,
      list: newList,
    });
  }

  handleDec = () => {
    const { value, list } = this.state;
    const newValue = value - 1;
    const id = uniqueId();
    const newItem = { [id]: <button onClick={this.removeItem(id)} type="button" className="list-group-item list-group-item-action" key={id}>{newValue}</button> };
    const newList = [newItem, ...list];
    this.setState({
      value: newValue,
      list: newList,
    });
  }

  render() {
    const { list } = this.state;
    const buttonList = list.map((item) => Object.values(item)[0]);
    const listGroup = (!buttonList.length ? null : <div className="list-group">{[...buttonList]}</div>);

    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.handleInc} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleDec} type="button" className="btn hexlet-dec">-</button>
        </div>
        {listGroup}
      </div>
    );
  }
}