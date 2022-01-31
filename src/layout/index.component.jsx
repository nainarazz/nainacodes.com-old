import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import config from '../../data/site-config';
import NavBar from '../components/navbar/navbar.component';
import { LayoutContainer } from './index.style';
import Hero from '../components/hero/hero.component';
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
        font-family: 'Roboto Slab';
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

    ::selection {
      background: ${themeColor.brand.mainBrand};
      color: #fff;
    }
`;

const components = {
  // eslint-disable-next-line react/jsx-props-no-spreading
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  a: (props) => <a {...props} style={{ textDecoration: 'underline' }} />,
};

const MainLayout = ({ children, withHeroHeader }) => (
  <>
    <NavBar />
    <main>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {withHeroHeader && <Hero />}
      <LayoutContainer withHeroHeader={withHeroHeader}>
        <GlobalStyle />
        <MDXProvider components={components}>{children}</MDXProvider>
      </LayoutContainer>
    </main>
    <Footer config={config} />
  </>
);

export default MainLayout;
