import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import config from '../../data/SiteConfig';
import NavBar from '../components/navbar/navbar.component';
import { LayoutContainer } from './index.style';
import Footer from '../components/footer/footer.component';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

    body {
        margin: 0;
        padding: 0;
        color: rgb(34, 36, 38);
    }

    html {
        height: 100%;
      }
    
`;

const MainLayout = ({ children, withHeroHeader }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <NavBar />
      <LayoutContainer withHeroHeader={withHeroHeader}>
        <GlobalStyle />
        <MDXProvider>{children}</MDXProvider>
      </LayoutContainer>
      <Footer config={config} />
    </>
  );
};

export default MainLayout;
