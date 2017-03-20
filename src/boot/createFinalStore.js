// @flow
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { identity } from 'lodash/identity';

type Params = { apolloClient: any };

export default function createFinalStore({ apolloClient }: Params) {
  const reducer = combineReducers({
    apollo: apolloClient.reducer()
  });

  const middleware = compose(
    applyMiddleware(apolloClient.middleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : identity
  );

  return createStore(reducer, undefined, middleware);
}
