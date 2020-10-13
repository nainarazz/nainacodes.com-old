import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { formatPosts } from '../utils/helpers';
import Layout from '../layout/index.component';
import config from '../../data/site-config';
import themeColor from '../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';
import PostListing from '../components/post-listing/post-listing.component';

const { brand, color } = themeColor;

const SearchContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
`;

const Search = styled.input`
  border-radius: 6px;
  padding: 0.6rem;
  outline: none;
  font-size: 0.8rem;
  line-height: 1;
  border: 2px solid ${color.lightgrey};
  width: 100%;
  ${media.tablet`width: 50%;`}
`;

const FilterCount = styled.div`
  margin: 0 10px;
  color: ${brand.lightAccent};
  font-weight: 600;
  line-height: 1;
  padding: 0.6rem;
`;

const Loader = styled.div`
  text-align: center;
  color: ${brand.darkShade};
`;

const pageSize = 10;
const BlogPage = ({ data }) => {
  const postEdges = data.allMdx.edges;
  const [filteredPosts, setFilteredPosts] = useState(() => formatPosts(postEdges));
  const [posts, setPosts] = useState(() => formatPosts(postEdges).slice(0, pageSize));

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filtered = postEdges.filter((p) =>
      p.node.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const formattedPosts = formatPosts(filtered);
    setFilteredPosts(formattedPosts);
    setPosts(formattedPosts.slice(0, pageSize));
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
          <FilterCount>{postEdges.length}</FilterCount>
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
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { isPublished: { eq: true } } }
    ) {
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
