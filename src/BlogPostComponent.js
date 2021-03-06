import React from 'react';
import {
  withPhenomicApi,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client';
import { Layout } from './Layout';
import { PageHead } from './PageHead';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { isLoading, page } = this.props;
    return (
      <div>
        {!isLoading && page.node && (
          <Layout name={page.node.batch}>
            <PageHead
              title={'Tegner bryggers -' + page.node.title}
              description={textRenderer(page.node.body).slice(0, 150) + '…'}
            />
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
                {page.node.untappd && (
                  <a href={page.node.untappd} target="_blank">
                    untappd
                  </a>
                )}
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
  page: query({ path: 'posts', id: props.params.splat })
}));

export { BlogPostContainer };
