// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import flowRight from 'lodash/flowRight';
import LoginWithAuth0 from '../login/LoginWithAuth0';
import Home from '../home/Home';
import Loading from '../common/Loading';
import config from '../../config/config';
const { localStorage } = window;

const LoggedIn = (props: { onLogOut: EventHandler }) => (
  <div className="pv3">
    <Home />
    <span className="dib bg-red white pa3 pointer dim" onClick={props.onLogOut}>
      Logout
    </span>
  </div>
);

const LoggedOut = () => (
  <div className="pv3">
    <LoginWithAuth0
      clientId={config.auth0.clientId}
      domain={config.auth0.domain}
    />
  </div>
);

class App extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  _logout = () => {
    localStorage.removeItem('auth0IdToken');
    location.reload();
  };

  _isLoggedIn = () => {
    return this.props.data.user;
  };

  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }

    return this._isLoggedIn()
      ? <LoggedIn onLogOut={this._logout} />
      : <LoggedOut />;
  }
}

const UserQuery = gql`
  query userQuery {
    user {
      id
    }
  }
`;

// graphql(UserQuery, { options: { fetchPolicy: 'network-only' } }),
const withData = graphql(UserQuery);

export default flowRight(withData, withRouter)(App);
