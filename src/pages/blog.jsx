import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import PostListing from '../components/postListing/postListing.component';
import { SearchContainer, Search, FilterCount } from '../page-styles/blog.style';

const BlogPage = ({ data }) => {
  const edges = (data.allMdx && data.allMdx.edges) || [];
  const [posts, setPosts] = useState(edges);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filteredPosts = edges.filter((p) =>
      p.node.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  return (
    <Layout>
      <div>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <h1>Articles</h1>
        <SearchContainer>
          <Search type="text" placeholder="type to search blog posts" onChange={handleSearch} />
          <FilterCount>{posts.length}</FilterCount>
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
