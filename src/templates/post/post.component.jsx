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
  TwitterShare,
  TagsContainer,
  DateUpdate,
  SocialLinkContainer,
} from './post.style';

const Post = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
  const coverImgFluid = post.cover.childImageSharp.fluid;

  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
    config.siteUrl
  }/blog/${post.slug}/&via=nr_razz`;

  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div>
        <Title>{post.title}</Title>
        <CoverImage>
          <Img fluid={coverImgFluid} />
          <a href={post.imgAttribution}>{post.imgAttribution}</a>
        </CoverImage>
        <MDXRenderer>{postNode.body}</MDXRenderer>
        <TagsContainer>
          {post.tags.map((t, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tag key={i} tag={t}>
              {t}
            </Tag>
          ))}
          <Tag>Open source</Tag>
          <Tag>Javascript</Tag>
        </TagsContainer>
        <SocialLinkContainer>
          <TwitterShare
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="share"
          />
          <DateUpdate>Last updated: {post.date}</DateUpdate>
        </SocialLinkContainer>
      </div>
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
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imgAttribution
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
