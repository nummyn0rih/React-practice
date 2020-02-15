import axios from 'axios';
import React from 'react';
import '../App.css';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      posts: [],
    };
  }

  handleChange = async ({ target: { value } }) => {
    this.setState({
      text: value,
      posts: [],
    });
    if (!value) {
      return;
    }
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    const list = data.filter((comment) => {
      const substr = comment.title.substring(0, value.length);
      return substr.toLowerCase() === value.toLowerCase();
    });
    this.setState({ posts: list });
  }

  render() {
    const { text, posts } = this.state;

    const form = (
      <form>
        <div className="form-group">
          <label htmlFor="text">Find posts</label>
          <input
            onChange={this.handleChange}
            value={text}
            type="text"
            id="text"
            className="form-control"
            placeholder="Enter post title"
          />
        </div>
      </form>
    );

    const postsRender = posts.length === 0 ? (
      null
    ) : (
      <div>
        {posts.map((el) => (
          <div className="card post" key={el.id}>
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <p className="card-text">{el.body}</p>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        {form}
        {postsRender}
      </div>
    );
  }
}
