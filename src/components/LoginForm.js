import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/index'
import axios from 'axios'

function mapDispatchToProps(dispatch) {
  return ({
    login: (article) => dispatch(login(article))
  })
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    console.log('yooo')
    console.log(this.state);
    
    event.preventDefault();
    const { username, password } = this.state //must pass through token and whether login was successful
    axios.post('http://localhost:3000/token', {
      userName: username,
      pssword: password
    })
    .then(response => {
      console.log('yooo1')
      // this.setState({
      //   "response": response,
      //   "status": ''
      // })
      sessionStorage.setItem('token', response.data.token)
      // window.location.href = "/";
      this.props.login({ token: response.data.token, active: true })
      /*** */this.setState({username : 'you have logged in now'})
    })
    .catch(error => {
      console.log(error);
      /*** */this.setState({username : 'bad login'})
      console.log(this.state.status)
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Login
        </button>
      </form>
    )
  }
}

const LoginForm = connect(null, mapDispatchToProps)(ConnectedForm)

export default LoginForm