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
import { HomeContainer } from './src/Home'
import { BlogPostContainer } from './src/BlogPostContainer'
import { PostListContainer } from './src/PostListContainer'
import { PageError } from './src/PageError'

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='/after/:after' component={HomeContainer} />
    <Route path='/blog/*' component={BlogPostContainer} />
    <Route path='/postlist/' component={PostListContainer} />
    <Route path='/postlist/after/:after' component={PostListContainer} />
    <Route path='*' component={PageError} />
  </Router>
))
