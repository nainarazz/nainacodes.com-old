import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import config from '../../data/SiteConfig';
import NavBar from '../components/navbar/navbar.component';
import { LayoutContainer } from './index.style';
import Footer from '../components/footer/footer.component';
import { CodeBlock } from '../components/code-block/code-block.component';
import themeColor from '../config/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

    body {
        margin: 0;
        padding: 0;
        color: ${themeColor.color.body};
    }

    html {
        height: 100%;
        overflow: auto;
      }

      code {
        padding: 2px 4px;
        background: #f4f3fa;
        border-radius: 3px;
        color: ${themeColor.color.body};
      }
    
`;

const components = {
  // eslint-disable-next-line react/jsx-props-no-spreading
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

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
        <MDXProvider components={components}>{children}</MDXProvider>
      </LayoutContainer>
      <Footer config={config} />
    </>
  );
};

export default MainLayout;
