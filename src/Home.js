import React from 'react';
import { Link } from 'react-router';
import { withPhenomicApi, query } from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { BigLink } from './BigLink';
import { PageHead } from './PageHead';

const Home = ({ isLoading, posts }) => (
  <div>
    {!isLoading && (
      <Layout name="home">
        <PageHead
          title="Tegner bryggers"
          description="Tegner bryggers - Hjemmebryggeri, log over bryg"
        />
        <div className="home-content">
          <h1>Tegner bryggers</h1>
          <p>Hjemmebryggeri på Amager, startet April 2017</p>
          <p>Dette er en log over det øl der kommer ud af det</p>
        </div>
        <h3 className="list-head">De 5 seneste indlæg</h3>
        {posts &&
          posts.node &&
          posts.node.list.map(post => <BigLink key={post.id} props={post} />)}
        <div className="flex flex--between flex--nowrap">
          {posts.node && posts.node.next && (
            <Link className="btn-paging" to={`/after/${posts.node.next}/`}>
              Ældre indlæg
            </Link>
          )}
          {posts.node && posts.node.previous && (
            <Link
              className="btn-paging btn-paging--last"
              to={
                posts.node.previousPageIsFirst
                  ? `/`
                  : `/after/${posts.node.previous}/`
              }
            >
              Nyere indlæg
            </Link>
          )}
        </div>
      </Layout>
    )}
  </div>
);

const HomeContainer = withPhenomicApi(Home, props => ({
  posts: query({ path: 'posts', limit: 5, after: props.params.after })
}));

export { HomeContainer };
