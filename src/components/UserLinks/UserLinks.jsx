import React from 'react';
import './UserLinks.css';

const UserLinks = ({ config, labeled }) => {
  const getLinkElements = () => {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <a href={link.url} key={`${link.url}`}>
        <button type="button" key={link.label}>
          {labeled ? link.label : ''}
        </button>
      </a>
    ));
  };

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return <div className="user-links">{getLinkElements()}</div>;
};

export default UserLinks;
