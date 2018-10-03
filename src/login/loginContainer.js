import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actionBuilder from "../actions";
import FormComponent from './loginFormComponent';
import './login.css';
import * as services from '../services';

class LoginView extends Component {

  state = {
    email: '',
    password: ''
  };

  componentDidMount() {
    if (localStorage.getItem('loginData') !== null) {
      services.setLocalStorage();
      let user = JSON.parse(localStorage.getItem('loginData'));
      if (user && user.email && user.password) {
        this.props.onLogIn(user);
      }
    }
  }

  componentWillReceiveProps(newState) {
    if (this.props.loggedIn != newState.loggedIn)
      this.props.history.push('/home');
  }

  render() {
    return (
      <div className="login-view">
        <div className="login-content">
          <div className="login-wrap">
            <FormComponent
              email={this.state.email}
              password={this.state.password}
              changeEmail={(evt) => this.setState({ email: evt.target.value })}
              changePassword={(evt) => this.setState({ password: evt.target.value })}
              clicked={(evt) => evt.preventDefault & this.props.onLogIn(this.state)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginData.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: (state) => dispatch(actionBuilder.logIn(state))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));