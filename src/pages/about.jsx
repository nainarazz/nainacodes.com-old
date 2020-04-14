import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>Edit About component or pages/about.jsx to include your information.</h1>
      </div>
    </Layout>
  );
};

export default AboutPage;
