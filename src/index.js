// @flow
import 'tachyons';
import './common/base.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import createApolloClient from './boot/createApolloClient';
import createFinalStore from './boot/createFinalStore';
import renderRoutes from './boot/renderRoutes';
import routes from './config/routes';
import NavBar from './components/navBar/NavBar';

const apolloClient = createApolloClient();
const store = createFinalStore({ apolloClient });

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <Router>
      <div>
        <NavBar routes={routes} />
        {renderRoutes(routes)}
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
