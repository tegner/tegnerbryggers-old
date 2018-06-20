import React from 'react';
import Head from 'react-helmet';
import { Router, Route, browserHistory, Link } from 'react-router';
import {
  withPhenomicApi,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { PageError } from './PageError';
import { Menu, MenuContainer } from './Menu';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { hasError, isLoading, page, posts } = this.props;
    return (
      <div>
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
                  <div className="post-image">
                    <img src={page.node.img} />
                  </div>
                </header>
                <div className="beer-data">
                  <div className="flex flex--between">
                    <span className="label">Brygget</span>
                    <span className="data">{page.node.brewed}</span>
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
                  <div className="flex flex--between mar--b">
                    <span className="label">ABV</span>
                    <span className="data">{page.node.abv}</span>
                  </div>
                  {page.node.untappd && <a href={page.node.untappd}>untappd</a>}
                </div>
                <div className="beer-body">
                  <BodyRenderer>{page.node.body}</BodyRenderer>
                </div>
              </article>
              <div className="beer-images">
                {page.node.images &&
                  page.node.images.map(function(image, index) {
                    return (
                      <div key={index} className="beer-image">
                        <img src={image} />
                      </div>
                    );
                  })}
              </div>
            </Layout>
          )}
      </div>
    );
  }
}

const BlogPostContainer = withPhenomicApi(BlogPost, props => ({
  page: query({ path: 'content/posts', id: props.params.splat })
}));

export { BlogPostContainer };
