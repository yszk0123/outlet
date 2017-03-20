// @flow
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import config from '../config/config';

const networkInterface = createNetworkInterface({
  uri: config.apollo.endpoint
});

networkInterface.use([
  {
    applyMiddleware(request, next) {
      if (!request.options.headers) {
        request.options.headers = {};
      }

      const storageKey = localStorage.getItem(
        config.auth0.storageKeyForIdToken
      );
      if (storageKey) {
        request.options.headers.authorization = `Bearer ${storageKey}`;
      }
      next();
    }
  }
]);

export default function createApolloClient() {
  return new ApolloClient({ networkInterface });
}
