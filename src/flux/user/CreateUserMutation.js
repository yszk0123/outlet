// @flow
import gql from 'graphql-tag';

export default gql`
  mutation (
    $idToken: String!,
    $name: String!,
    $email: String!
  ) {
    createUser(
      authProvider: { auth0: { idToken: $idToken } },
      name: $name,
      email: $email
    ) {
      id
    }
  }
`;
