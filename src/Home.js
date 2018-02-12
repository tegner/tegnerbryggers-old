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

const Home = ({ isLoading, posts }) => (
  <Layout>
    { isLoading && 'Loading...' }
    { !isLoading && (
      <div>
        <div>
          <Head>
            <title>Tegners Bryggers</title>
            <meta name='description' content='Tegners Bryggers - Hjemmebryggeri, log over bryg' />
          </Head>
          <div className='home-content'>
            <h1>Tegners Bryggers</h1>
            <p>Hjemmebryggeri på Amager, med fokus på at brygge velsmagende øl</p>
          </div>
          <h3 className='list-head'>De 5 seneste bryg</h3>
          { posts &&
              posts.node &&
              posts.node.list.map(post => (
                <BigLink key={post.id} props={post} />
              ))}
        </div>
      </div>
    ) }
  </Layout>
)

const HomeContainer = createContainer(Home, props => ({
  posts: query({ path: 'posts', limit: 5 })
}))

export { HomeContainer }

// <div>
//   {posts.node &&
//     posts.node.next && (
//       <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
//   )}
//   {posts.node &&
//     posts.node.previous && (
//       <Link to={posts.node.previousPageIsFirst ? `/` : `/after/${posts.node.previous}/`}>Newer posts</Link>
//     )}
// </div>
