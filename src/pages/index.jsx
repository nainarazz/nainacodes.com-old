import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/index.component';
import config from '../../data/site-config';
import SEO from '../components/SEO/SEO';
import Hero from '../components/hero/hero.component';
import PostListing from '../components/post-listing/post-listing.component';
import { Header } from '../page-styles/index.style';

const HomePage = ({ data }) => {
  const posts = (data.allMdx && data.allMdx.edges) || [];
  return (
    <>
      <Hero />
      <Layout withHeroHeader>
        <SEO />
        <Helmet title={`${config.siteTitle}`} />
        <Header>
          <h1>
            Latest Posts
            <Link to="/blog">View all</Link>
          </h1>
        </Header>
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
            tags
          }
        }
      }
    }
  }
`;
