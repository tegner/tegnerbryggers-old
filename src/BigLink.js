import React from 'react'
import Head from 'react-helmet'
import { Router, Route, browserHistory, Link } from 'react-router'

const BigLink = ({ props }) => (

  <Link className='biglink' to={`/blog/${props.id}/`} style={{'background-image': 'url(' + props.img + ')'}}>
    <div className='biglink-content'>
      {props.title || props.id}
    </div>
  </Link>
)

export { BigLink }
