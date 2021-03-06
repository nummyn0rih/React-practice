import React from 'react';

export default class Component extends React.Component {
  render() {
    const { onRemove, text } = this.props;

    return (
      <div>
        <div className="row">
          <div>
            <button onClick={onRemove} type="button" className="btn btn-primary btn-sm">-</button>
          </div>
          <div className="col-10">{text}</div>
        </div>
        <hr />
      </div>
    );
  }
}
