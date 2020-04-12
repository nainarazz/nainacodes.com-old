import React from 'react';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import config from '../../data/SiteConfig';
import './index.css';

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <MDXProvider>{children}</MDXProvider>
    </div>
  );
};

export default MainLayout;
