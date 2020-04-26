import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/index.component';
import PostListing from '../components/post-listing/post-listing.component';
import config from '../../data/site-config';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const postEdges = data.allMdx.edges;
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <h1>
          Tags{' '}
          <span style={{ fontSize: '0.9rem', marginLeft: '1rem', fontStyle: 'italic' }}>{tag}</span>
        </h1>

        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export default Tag;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
