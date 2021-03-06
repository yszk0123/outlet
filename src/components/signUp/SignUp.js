// @flow
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import flowRight from 'lodash/flowRight';
import CreateUserMutation from '../../flux/user/CreateUserMutation';
import UserQuery from '../../flux/user/UserQuery';
import SignUpLayout from './SignUpLayout';
import config from '../../config/config';
const { localStorage } = window;

type State = {
  name: string,
  email: string
};

class SignUp extends Component {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = { name: '', email: '' };
  }

  _handleNameChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    this.setState({ name: event.target.value });
  };

  _handleEmailChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    this.setState({ email: event.target.value });
  };

  _handleSignUp = async () => {
    const variables = {
      idToken: localStorage.getItem('auth0IdToken'),
      email: this.state.email,
      name: this.state.name
    };

    try {
      await this.props.createUser({ variables });
    } catch (error) {
      console.error(error);
      this.props.history.replace('/');
    }
  };

  _needSignUp() {
    return !this.props.data.user &&
      localStorage.getItem(config.auth0.storageKeyForIdToken);
  }

  render() {
    if (!this._needSignUp()) {
      console.warn('not a new user or already logged in');
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      );
    }

    return (
      <SignUpLayout
        {...this.state}
        {...this.props}
        onNameChange={this._handleNameChange}
        onEmailChange={this._handleEmailChange}
        onSignUp={this._handleSignUp}
      />
    );
  }
}

export default flowRight(
  withRouter,
  graphql(CreateUserMutation, { name: 'createUser' }),
  graphql(UserQuery)
)(SignUp);
