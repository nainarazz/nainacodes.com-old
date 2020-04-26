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

const { color } = themeColor;

const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  ${media.desktop`justify-content: flex-start;`}

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
  border-bottom: 1px solid ${color.lightgrey};
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
  const pageSize = 5;
  const posts = (data.allMdx && data.allMdx.edges) || [];
  return (
    <>
      <Hero />
      <Layout withHeroHeader>
        <SEO />
        <Helmet title={`${config.siteTitle}`} />
        <div style={{ marginBottom: 'em' }}>
          <Header>
            Latest Posts
            <Link to="/blog">View all</Link>
          </Header>
        </div>
        <PostListing postEdges={posts.slice(0, pageSize)} />
        <Header style={{ marginBottom: '5px' }}>Open Source Projects</Header>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
          side projects for learning new stuff
        </p>

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
