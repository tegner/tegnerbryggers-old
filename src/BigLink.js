import React from 'react';
import { Link } from 'react-router';

const BigLink = ({ props }) => (
  <Link
    className="biglink"
    to={`/blog/${props.id}/`}
    style={{ backgroundImage: 'url(' + props.img + ')' }}
  >
    <div className="biglink-content">{props.title || props.id}</div>
  </Link>
);

export { BigLink };
