import React from 'react';
import { UserLinksContainer } from './userLinks.style';

const UserLinks = ({ config }) => {
  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }

  return (
    <UserLinksContainer>
      {userLinks.map((link) => (
        <a href={link.url} key={`${link.url}`}>
          <img src={link.iconUrl} alt="social icon" />
        </a>
      ))}
    </UserLinksContainer>
  );
};

export default UserLinks;
