// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import flowRight from 'lodash/flowRight';

type Props = { data: { allBookmarks: Object } };

const Bookmarks = (props: Props) => {
  if (props.data.loading) {
    return null;
  }

  return (
    <div>
      {props.data.allBookmarks.map(bookmark => (
        <div key={bookmark.id}>Title: {bookmark.title}</div>
      ))}
    </div>
  );
};

const BookmarksQuery = gql`
  query Bookmarks($first: Int) {
    allBookmarks(
      first: $first,
      orderBy: createdAt_DESC
    ) {
      id
      description
      title
      uri
    }
  }
`;

const withData = graphql(BookmarksQuery);

export default flowRight(withData)(Bookmarks);
