import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import config from '../../data/SiteConfig';
import NavBar from '../components/navbar/navbar.component';
import { LayoutContainer } from './index.style';
import Footer from '../components/Footer/Footer';

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

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <NavBar />
      <LayoutContainer>
        <GlobalStyle />
        <MDXProvider>{children}</MDXProvider>
        <Footer config={config} />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;