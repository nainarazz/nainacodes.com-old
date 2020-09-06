import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/index.component';
import config from '../../data/site-config';
import SEO from '../components/SEO/SEO';
import Hero from '../components/hero/hero.component';
import PostListing from '../components/post-listing/post-listing.component';
import themeColor from '../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';
import projects from '../../data/projects';
import { formatPosts } from '../utils/helpers';

const { color } = themeColor;

const Header = styled.div`

  display: flex;
  justify-content: space-between;
  ${media.desktop`justify-content: flex-start;`}
  border-bottom: 1px solid ${color.lightgrey};

  h2 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 0.9rem;
    background: ${color.lightgrey};
    margin-left: 2rem;
    padding: 0.4rem 0.65rem;
    border-radius: 8px;
  }

`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 115px auto;
  grid-column-gap: 1em;
  margin: 10px 0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  ${media.phone`
    grid-template-columns: 170px auto;
  `};
  ${media.thone`
    display: grid;
    grid-template-columns: 170px auto 192px;
  `}
`;

const Icon = styled.a`
  text-decoration: none;
  color: ${color.body};
  font-weight: 600;
`;

const Description = styled.div`
  margin: 0 1rem;
  display: none;
  white-space: initial;
  font-size: 0.9rem;
  ${media.thone`
    display: block;
    grid-template-columns: 170px auto;
  `}
`;

const ProjectLinkContainer = styled.div`
  text-align: right;
  ${media.thone`text-align: initial;`}
`;

const ProjectLink = styled.a`
  margin: 0 5px;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 8px;

  &:hover {
    color: ${color.white};
    background: ${color.purple};
  }
`;

const HomePage = ({ data }) => {
  const latestPosts = data.latestPosts.edges;
  const popularPosts = data.popularPosts.edges;

  const formattedLatestPosts = formatPosts(latestPosts);
  const formattedPopularPosts = formatPosts(popularPosts);

  return (
    <>
      <Hero />
      <Layout withHeroHeader>
        <SEO />
        <Helmet title={`${config.siteTitle}`} />

        <Header>
          <h2>
            Latest Posts
            <Link to="/blog">View all</Link>
          </h2>
        </Header>
        <PostListing postEdges={formattedLatestPosts} />

        <Header>
          <h2>
            Popular Posts
            <Link to="/blog">View all</Link>
          </h2>
        </Header>
        <PostListing postEdges={formattedPopularPosts} />

        <Header style={{ marginBottom: '5px' }}>
          <h2>Open Source Projects</h2>
        </Header>

        {projects.map((p, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectContainer key={i}>
            <Icon href={p.website}>
              {p.icon} {p.name}
            </Icon>
            <Description>{p.shortDescription}</Description>
            <ProjectLinkContainer>
              {p.github && <ProjectLink href={p.github}>Source Code</ProjectLink>}
              {p.website && <ProjectLink href={p.website}>Link</ProjectLink>}
            </ProjectLinkContainer>
          </ProjectContainer>
        ))}
      </Layout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    latestPosts: allMdx(
      limit: 5
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

    popularPosts: allMdx(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { isPublished: { eq: true }, category: { in: ["popular"] } } }
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
