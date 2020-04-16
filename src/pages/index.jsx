import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';
import Hero from '../components/hero/hero.component';
import PostListing from '../components/postListing/postListing.component';

const HomePage = ({ data }) => {
  const posts = (data.allMdx && data.allMdx.edges) || [];
  return (
    <>
      <Hero />
      <Layout>
        <SEO />
        <Helmet title={`${config.siteTitle}`} />
        <h2>Latest Posts</h2>
        <PostListing postEdges={posts} />
      </Layout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            category
            cover
            tags
          }
        }
      }
    }
  }
`;
