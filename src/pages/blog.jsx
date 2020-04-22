import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import PostListing from '../components/postListing/postListing.component';
import { SearchContainer, Search, FilterCount } from '../page-styles/blog.style';

const BlogPage = ({ data }) => {
  const posts = (data.allMdx && data.allMdx.edges) || [];
  return (
    <Layout>
      <div>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <h1>Articles</h1>
        <SearchContainer>
          <Search type="text" placeholder="type to search blog posts" />
          <FilterCount>10</FilterCount>
        </SearchContainer>
        <PostListing postEdges={posts} />
      </div>
    </Layout>
  );
};

export default BlogPage;

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
