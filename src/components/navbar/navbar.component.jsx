import React, { useState } from 'react';
import { Link } from 'gatsby';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';
import { Container, MenuItems, Logo, Nav, StyledLink } from './navbar.style';

const NavBar = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <>
      <Container shouldShowShadow={shouldShowShadow} shouldHideHeader={shouldHideHeader}>
        <Nav>
          <Logo>
            <Link to="/">
              <img src="/logos/logo-96.png" alt="blog logo" />
              <span>Naina Razafindrabiby</span>
            </Link>
          </Logo>
          <MenuItems>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </MenuItems>
        </Nav>
      </Container>
    </>
  );
};

export default NavBar;
