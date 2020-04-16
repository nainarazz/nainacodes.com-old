import React from 'react';
import { Link } from 'gatsby';

const isActive = (className) => ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: `${className} active` } : { className };
};

const LinkWithActive = ({ className, children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link getProps={isActive(className)} {...props}>
    {children}
  </Link>
);

export default LinkWithActive;
