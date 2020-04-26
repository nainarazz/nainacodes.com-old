import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import Layout from '../../layout/index.component';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/site-config';
import { Title, CoverImage } from './post.style';

const Post = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
  const coverImgFluid = post.cover.childImageSharp.fluid;

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
