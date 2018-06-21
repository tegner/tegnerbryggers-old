import React from 'react';
import Head from 'react-helmet';
import { Styling } from './Styling';

export class PageHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <Head>
        <html lang="da" /> {/* this is valid react-helmet usage! */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <Styling />
      </Head>
    );
  }
}
