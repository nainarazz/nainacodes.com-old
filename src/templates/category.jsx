/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/index.component';
import PostListing from '../components/post-listing/post-listing.component';
import config from '../../data/SiteConfig';

const Category = ({ pageContext, data }) => {
  const { category } = pageContext;
  const postEdges = data.allMdx.edges;
  return (
    <Layout>
      <div className="category-container">
        <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
        <h1>
          Category{' '}
          <span style={{ fontSize: '0.9rem', marginLeft: '1rem', fontStyle: 'italic' }}>
            {category}
          </span>
        </h1>
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export default Category;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
