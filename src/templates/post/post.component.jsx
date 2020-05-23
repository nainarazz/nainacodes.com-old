import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import Layout from '../../layout/index.component';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/site-config';
import {
  Title,
  CoverImage,
  Tag,
  TagsContainer,
  DateUpdate,
  SocialLinkContainer,
  PostMeta,
} from './post.style';

const monthDictionary = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const Post = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
  const coverImgFluid = post.cover.childImageSharp.fluid;

  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
    config.siteUrl
  }/blog/${post.slug}/&via=nr_razz`;

  const createdAt = new Date(post.date);
  const createdAtFormatted = `${
    monthDictionary[createdAt.getMonth()]
  } ${createdAt.getDate()}, ${createdAt.getFullYear()}`;

  const lastUpdated = new Date(post.lastUpdated);
  const lastUpdatedFormatted = `${
    monthDictionary[lastUpdated.getMonth()]
  } ${lastUpdated.getDate()} ${lastUpdated.getFullYear()}`;

  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <CoverImage>
        <Img fluid={coverImgFluid} />
        <a href={post.imgAttributionUrl}>{post.imgAttributionText}</a>
      </CoverImage>
      <div>
        <Title>{post.title}</Title>
        <PostMeta>
          <span>{createdAtFormatted}</span>
          <span>
            ・
            <span role="img" aria-label="time to read">
              🕑
            </span>
            {postNode.timeToRead} min
          </span>
          <span>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer">
              ・share
            </a>
          </span>
          <TagsContainer>
            {post.tags.map((t, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={i} tag={t}>
                {t}
              </Tag>
            ))}
          </TagsContainer>
        </PostMeta>
      </div>

      <MDXRenderer>{postNode.body}</MDXRenderer>
      <SocialLinkContainer>
        <DateUpdate>Last updated: {lastUpdatedFormatted}</DateUpdate>
      </SocialLinkContainer>
    </Layout>
  );
};

export default Post;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        cover {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imgAttributionUrl
        imgAttributionText
        date
        lastUpdated
        category
        tags
      }
      fields {
        slug
      }
      timeToRead
    }
  }
`;
