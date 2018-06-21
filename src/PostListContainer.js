import React from 'react';
import { Link } from 'react-router';
import { withPhenomicApi, query } from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { BigLink } from './BigLink';
import { PageHead } from './PageHead';

const PostList = ({ hasError, isLoading, posts }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  return (
    <Layout name="allposts">
      <PageHead
        title="Tegner Bryggers - Alle indlæg"
        description="Liste over alle indlæg"
      />
      <h1 className="list-head">Alle indlæg</h1>
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

const PostListContainer = withPhenomicApi(PostList, props => ({
  posts: query({ path: 'posts', limit: 12, after: props.params.after })
}));

export { PostListContainer };
