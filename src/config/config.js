// @flow

export default {
  apollo: {
    endpoint: process.env.REACT_APP_APOLLO_ENDPOINT
  },
  auth0: {
    storageKeyForIdToken: 'auth0IdToken',
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN
  }
};
