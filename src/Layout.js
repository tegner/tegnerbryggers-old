import React from 'react';
import Head from 'react-helmet';
import { Logo } from './Logo';
import { MenuContainer } from './Menu';
import { Styling } from './Styling';

const Layout = props => {
  return (
    <div className="blog page-container">
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
        <div className="flex mar--b">
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
