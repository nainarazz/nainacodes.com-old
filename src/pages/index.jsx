import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';
import Hero from '../components/hero/hero.component';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Layout>
        <SEO />
        <Helmet title={`${config.siteTitle}`} />
      </Layout>
    </>
  );
};

export default HomePage;
