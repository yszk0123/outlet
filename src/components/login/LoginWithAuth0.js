// @flow
import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router-dom';
const { localStorage } = window;

const LoginButton = (props: { onClick: EventHandler }) => (
  <span onClick={props.onClick} className="dib pa3 white bg-blue dim pointer">
    Log in with Auth0
  </span>
);

class LoginWithAuth0 extends Component {
  props: {
    clientId: string,
    domain: string,
    history: Object,
  };

  _lock: Auth0Lock;

  constructor(props) {
    super(props);

    this._lock = new Auth0Lock(props.clientId, props.domain);
  }

  componentDidMount() {
    this._lock.on('authenticated', authResult => {
      localStorage.setItem('auth0IdToken', authResult.idToken);
      this.props.history.replace('/signup');
    });
  }

  _onShowLock = () => {
    this._lock.show();
  };

  render() {
    return (
      <div>
        <LoginButton onClick={this._onShowLock} />
      </div>
    );
  }
}

export default withRouter(LoginWithAuth0);
