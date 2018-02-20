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

const Home = ({ isLoading, posts }) => (
  <div>
    {isLoading && 'Loading...'}
    {!isLoading && (
      <Layout name="home">
        <Head>
          <title>Tegner Bryggers</title>
          <meta
            name="description"
            content="Tegner bryggers - Hjemmebryggeri, log over bryg"
          />
        </Head>
        <div className="home-content">
          <h1>Tegner bryggers</h1>
          <aside>
            Bryggers er sammentrækning af bryggerhus, bygning indrettet til
            ølbrygning. - Ordbog over det danske sprog: Jens Høysgaard:
            Accentuered og raisonnered Grammatica 1747, (IV.249-488.), 40 -{' '}
            <a href="https://da.wikipedia.org/wiki/Bryggers">
              Kilde: Wikipedia
            </a>
          </aside>
          <p>Hjemmebryggeri på Amager</p>
        </div>
        <h3 className="list-head">De 5 seneste bryg</h3>
        {posts &&
          posts.node &&
          posts.node.list.map(post => <BigLink key={post.id} props={post} />)}
        <div className="flex flex--between flex--nowrap">
          {posts.node &&
            posts.node.next && (
              <Link className="btn-paging" to={`/after/${posts.node.next}/`}>
                Ældre indlæg
              </Link>
            )}
          {posts.node &&
            posts.node.previous && (
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

const HomeContainer = createContainer(Home, props => ({
  posts: query({ path: 'posts', limit: 5, after: props.params.after })
}));

export { HomeContainer };

// <div>
//   {posts.node &&
//     posts.node.next && (
//       <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
//   )}
//   {posts.node &&
//     posts.node.previous && (
//       <Link to={posts.node.previousPageIsFirst ? `/` : `/after/${posts.node.previous}/`}>Newer posts</Link>
//     )}
// </div>
