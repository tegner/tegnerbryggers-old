import React from 'react'
import Head from 'react-helmet'
import { Router, Route, browserHistory, Link } from 'react-router'
import {
  createContainer,
  query,
  BodyRenderer,
  textRenderer
} from '@phenomic/preset-react-app/lib/client'
import { Layout } from './Layout'
import { PageError } from './PageError'
import { Menu, MenuContainer } from './Menu'

const BlogPost = ({ hasError, isLoading, page, posts }) => {
  if (hasError) {
    return <PageError error={page.error} />
  }
  console.log('is this loaded every time?')
  return <div>
    {isLoading && 'Loading...'}
    {!isLoading &&
      page.node && (
      <Layout>
        <Head>
          <title>{page.node.title}</title>
          <meta
            name='description'
            content={textRenderer(page.node.body).slice(0, 150) + '…'}
                />
        </Head>
        <article>
          <h1>{page.node.title}</h1>
          <div>
            <div className='beer-data'>
              <div><span className='label'>Brygget</span> {page.node.date} </div>
              <div><span className='label'>Flasket</span> {page.node.bottled}</div>
              <div><span className='label'>IBU</span> {page.node.ibu}</div>
              <div><span className='label'>SRM</span> {page.node.srm}</div>
              <div><span className='label'>ABV</span> {page.node.abv}</div>
            </div>
            <img src={page.node.img} />
          </div>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      </Layout>
    )}
  </div>
}

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: 'posts', id: props.params.splat })
}))

export { BlogPostContainer }
