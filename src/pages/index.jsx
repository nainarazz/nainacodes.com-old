import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';

const HomePage = () => {
  return (
    <Layout>
      <SEO />
      <Helmet title={`${config.siteTitle}`} />
      <h2>Home page</h2>
    </Layout>
  );
};

export default HomePage;
