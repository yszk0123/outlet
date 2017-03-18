// @flow
import gql from 'graphql-tag';

export type UserData = QueryData<{
  user: {
    id: number,
    name: string,
    email: string
  }
}>;

export default gql`
  query {
    user {
      id,
      name,
      email
    }
  }
`;
