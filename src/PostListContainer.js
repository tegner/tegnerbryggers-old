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
import { Layout } from './Layout'
import { BigLink } from './BigLink'
import { MenuToggler } from './Menu'

const PostList = ({ hasError, isLoading, posts }) => {
  if (hasError) {
    return <PageError error={page.error} />
  }

  MenuToggler(null, { 'onlyClose': true })

  return <Layout>

    <h1>Alle bryg</h1>
    <h3 className='list-head'>Alle bryg</h3>
    {isLoading && 'Loading...'}
    {!isLoading &&
      posts &&
            posts.node &&
            posts.node.list.map(post => (
              <BigLink key={post.id} props={post} />
      ))}

    <div>
      {posts.node &&
          posts.node.next && (
            <Link to={`/postlist/after/${posts.node.next}/`}>Older posts</Link>
        )}
      {posts.node &&
          posts.node.previous && (
            <Link to={posts.node.previousPageIsFirst ? `/postlist/` : `/postlist/after/${posts.node.previous}/`}>Newer posts</Link>
          )}
    </div>
  </Layout>
}

const PostListContainer = createContainer(PostList, props => ({
  posts: query({ path: 'posts', limit: 12, after: props.params.after })
}))

export { PostListContainer }
