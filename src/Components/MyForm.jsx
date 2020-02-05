import React from 'react';
import '../App.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showed: 'form',
      acceptRules: false,
      address: '',
      city: '',
      country: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showed: 'table' });
  }

  handleBackward = (e) => {
    e.preventDefault();
    this.setState({ showed: 'form' });
  }

  render() {
    const {
      showed,
      acceptRules,
      address,
      city,
      country,
      email,
      password,
    } = this.state;

    const form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input
              onChange={this.handleChange}
              value={email}
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input
              onChange={this.handleChange}
              value={password}
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea
            onChange={this.handleChange}
            value={address}
            type="text"
            name="address"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input
              onChange={this.handleChange}
              value={city}
              type="text"
              name="city"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                onChange={this.handleChange}
                checked={acceptRules}
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                id="rules"
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );

    const table = (
      <div>
        <button onClick={this.handleBackward} type="button">Back</button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{`${acceptRules}`}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    if (showed === 'table') {
      return table;
    }
    return form;
  }
}