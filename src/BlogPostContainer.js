import React from 'react';
import Head from 'react-helmet';
import { Router, Route, browserHistory, Link } from 'react-router';
import {
  createContainer,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { PageError } from './PageError';
import { Menu, MenuContainer } from './Menu';

const BlogPost = ({ hasError, isLoading, page, posts }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }
  return (
    <div>
      {isLoading && 'Loading...'}
      {!isLoading &&
        page.node && (
          <Layout>
            <Head>
              <title>Tegner bryggers - {page.node.title}</title>
              <meta
                name="description"
                content={textRenderer(page.node.body).slice(0, 150) + '…'}
              />
            </Head>
            <article>
              <header className="post-header">
                <h1>{page.node.title}</h1>
                <img src={page.node.img} />
              </header>

              <div className="beer-data">
                <div className="flex flex--between">
                  <span className="label">Brygget</span>
                  <span className="data">{page.node.date}</span>
                </div>
                <div className="flex flex--between mar--b">
                  <span className="label">Flasket</span>
                  <span className="data">{page.node.bottled}</span>
                </div>
                <div className="flex flex--between">
                  <span className="label">IBU</span>
                  <span className="data">{page.node.ibu}</span>
                </div>
                <div className="flex flex--between">
                  <span className="label">SRM</span>
                  <span className="data">{page.node.srm}</span>
                </div>
                <div className="flex flex--between">
                  <span className="label">ABV</span>
                  <span className="data">{page.node.abv}</span>
                </div>
              </div>
              <BodyRenderer>{page.node.body}</BodyRenderer>
            </article>
          </Layout>
        )}
    </div>
  );
};

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: 'posts', id: props.params.splat })
}));

export { BlogPostContainer };
