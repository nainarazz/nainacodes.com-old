import React from 'react';
import UserLinks from '../userLinks/userLinks.component';
import { StyledFooter, NoticeContainer } from './footer.style';

const Footer = ({ config }) => {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }

  return (
    <StyledFooter>
      <NoticeContainer>
        <h4>{copyright}</h4>
      </NoticeContainer>
      <UserLinks config={config} labeled />
    </StyledFooter>
  );
};

export default Footer;
