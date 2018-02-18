import React from 'react';
import Head from 'react-helmet';
import { Logo } from './Logo';
// import '../public/css/style.css'
import { MenuContainer } from './Menu';
import { Styling } from './Styling';

const Layout = props => {
  return (
    <div className="blog page-container">
      <Head>
        <html lang="en" /> {/* this is valid react-helmet usage! */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="./public/favicon.png" rel="icon" type="image/png" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .styled { color: blue }
          `
          }}
        />
        // <Styling />
      </Head>
      <header className="header">
        <a href="/" className="header-logo">
          <Logo />
        </a>
      </header>

      <div className="page-container">
        <MenuContainer postName={props.name}>Menu</MenuContainer>
        <div className="blog-content">{props.children}</div>
      </div>
      <footer>
        <div class="flex mar--b">
          <a href="https://untappd.com/TegnerBryggers">untappd</a>

          <a href="https://www.instagram.com/j_tegner/">instagram</a>

          <a href="">tegnerbryggers [at] gmail.com</a>
        </div>
        <a href="/" className="footer-logo">
          <Logo />
        </a>
      </footer>
    </div>
  );
};

export { Layout };
