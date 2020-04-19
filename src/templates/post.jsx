import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout/index.component';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.css';

const Post = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
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
        <h1>{post.title}</h1>
        <MDXRenderer>{postNode.body}</MDXRenderer>
        <div className="post-meta">
          <PostTags tags={post.tags} />
        </div>
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
        cover
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
