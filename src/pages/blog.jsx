import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../layout/index.component';
import config from '../../data/SiteConfig';
import theme from '../config/theme';
import PostListing from '../components/postListing/postListing.component';
import { SearchContainer, Search, FilterCount } from '../page-styles/blog.style';

const Loader = styled.div`
  text-align: center;
  color: ${theme.brand.darkShade};
`;

const pageSize = 8;
const BlogPage = ({ data }) => {
  const allPosts = (data.allMdx && data.allMdx.edges) || [];
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [posts, setPosts] = useState(allPosts.slice(0, pageSize));

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filtered = allPosts.filter((p) =>
      p.node.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPosts(filtered);
    setPosts(filtered.slice(0, pageSize));
  };

  const fetchNextPosts = () => {
    setTimeout(() => {
      const index = posts.length;
      const fetchedPosts = filteredPosts.slice(index, index + pageSize);
      setPosts(posts.concat(fetchedPosts));
    }, 100);
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
        <InfiniteScroll
          dataLength={filteredPosts.length}
          next={fetchNextPosts}
          hasMore={posts.length < filteredPosts.length}
          loader={<Loader>loading...</Loader>}
        >
          <PostListing postEdges={posts} />
        </InfiniteScroll>
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
