import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item';
import '../App.css';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
    };
  }

  handleChange = (e) => this.setState({ text: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, items } = this.state;
    const id = uniqueId();
    const item = <Item onRemove={this.handleRemove} text={text} id={id} />;
    const newItems = [{ id, item }, ...items];
    this.setState({
      text: '',
      items: newItems,
    });
  }

  handleRemove = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  }

  renderItems = () => {
    const { items } = this.state;
    if (!items.length) {
      return null;
    }

    const list = items.map((item) => {
      console.log(item)
      console.log(item.item)
      return item.item
    });
    return (
      <>
        {[...list]}
      </>
    );
  }

  render() {
    const result = this.renderItems();
    const { text } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input
                onChange={this.handleChange}
                value={text}
                type="text"
                className="form-control mr-3"
                required
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {result}
      </div>
    );
  }
}
