import React from 'react';
import Head from 'react-helmet';
import { Router, Route, browserHistory, Link } from 'react-router';
import {
  createApp,
  createContainer,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { BigLink } from './BigLink';
import { MenuToggler } from './Menu';

const PostList = ({ hasError, isLoading, posts }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  return (
    <Layout>
      <h1>Alle bryg</h1>
      <h3 className="list-head">Alle bryg</h3>
      {isLoading && 'Loading...'}
      {!isLoading &&
        posts &&
        posts.node &&
        posts.node.list.map(post => <BigLink key={post.id} props={post} />)}
      <div className="flex flex--between flex--nowrap">
        {posts.node &&
          posts.node.next && (
            <Link
              className="btn-paging"
              to={`/postlist/after/${posts.node.next}/`}
            >
              Ældre indlæg
            </Link>
          )}
        {posts.node &&
          posts.node.previous && (
            <Link
              className="btn-paging btn-paging--last"
              to={
                posts.node.previousPageIsFirst
                  ? `/postlist/`
                  : `/postlist/after/${posts.node.previous}/`
              }
            >
              Nyere indlæg
            </Link>
          )}
      </div>
    </Layout>
  );
};

const PostListContainer = createContainer(PostList, props => ({
  posts: query({ path: 'posts', limit: 12, after: props.params.after })
}));

export { PostListContainer };
