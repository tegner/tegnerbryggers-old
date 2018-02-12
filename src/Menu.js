import React from 'react'
import Head from 'react-helmet'
import { Router, Route, browserHistory, Link } from 'react-router'
import {
  createApp,
  createContainer,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client'

const MenuToggler = function (ev, obj) {
  if (ev) {
    ev.preventDefault()
    ev.stopPropagation()
  }

  let menuElement = document.getElementById('menu')
  if (menuElement !== null) {
    if (obj && obj.onlyClose) {
      menuElement.classList.remove('menu--opened')
    } else {
      menuElement.classList.toggle('menu--opened')
    }
  }
}

const Menu = ({ isLoading, posts }) => (
  <div>
    {isLoading && 'Loading...'}
    {!isLoading && (
    <nav id='menu' className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <a href='/'>Forsiden</a>
        </li>
        {posts &&
          posts.node &&
          posts.node.list &&
          posts.node.list.map(post => (
            <li className='menu-item' key={post.id}>
              <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
            </li>
          ))}
        <li className='menu-item'>
          <a href='/postlist/'>Alle bryg</a>
        </li>
      </ul>
      <div className='menu-handle' onClick={MenuToggler.bind(this)}>
        <svg onClick={MenuToggler.bind(this)} id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 137.28 226.82'>
          <title>angle</title>
          <polygon points='23.87 226.82 0 202.96 89.55 113.41 0 23.87 23.87 0 137.28 113.41 23.87 226.82' style={{fill: '#231f20'}} />
        </svg>
      </div>

    </nav>
    )}
  </div>
)

const MenuContainer = createContainer(Menu, props => ({
  posts: query({ path: 'posts', limit: 12 })
}))

export { MenuContainer, MenuToggler }
