import React from 'react'
import Head from 'react-helmet'
import { MenuContainer } from './Menu'
import { Logo } from './Logo'
import '../public/css/style.css'

const Layout = ({ children }) => (
  <div className='blog page-container'>
    <Head>
      <html lang='en' /> {/* this is valid react-helmet usage! */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='./public/favicon.png' rel='icon' type='image/png' />
    </Head>
    <header>
      <a href='/' className='header-logo'>
        <Logo />
      </a>
    </header>
    <div className='page-container'>
      <MenuContainer>Menu</MenuContainer>
      <div className='blog-content'>{children}</div>
    </div>
    <footer>
      <a href='/' className='footer-logo'>
        <Logo />
      </a>
    </footer>
  </div>
)

export { Layout }
