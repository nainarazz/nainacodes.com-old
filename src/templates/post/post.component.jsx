import React, { useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import Layout from '../../layout/index.component';
import SEO from '../../components/SEO/SEO';
import config from '../../../data/site-config';
import Comment from '../../components/comment/comment'
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
  const commentBoxRef = useRef();

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

  useEffect(() => {
    const commentScript = document.createElement('script')
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'nainarazz/comments')
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', 'github-light')
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBoxRef && commentBoxRef.current) {
      commentBoxRef.current.appendChild(commentScript)
    } else {
      // eslint-disable-next-line no-console
      console.log(`Error adding utterances comments on: ${commentBoxRef}`)
    }
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
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
        <a href={postNode.fields.editLink}>・edit</a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer">
          ・share
        </a>
        <TagsContainer>
          {post.tags.map((t, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tag key={i} tag={t} to={`/tags/${t}`}>
              {t}
            </Tag>
          ))}
        </TagsContainer>
      </PostMeta>

      <CoverImage>
        <Img fluid={coverImgFluid} />
        <a href={post.imgAttributionUrl}>{post.imgAttributionText}</a>
      </CoverImage>

      <MDXRenderer>{postNode.body}</MDXRenderer>
      <SocialLinkContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={twitterShare}
        >
          Share on Twitter
        </a>
        <DateUpdate>Last updated: {lastUpdatedFormatted}</DateUpdate>
      </SocialLinkContainer>
      <div>
        <h2>Comments</h2>
        <Comment commentBox={commentBoxRef} />
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
        editLink
      }
      timeToRead
    }
  }
`;
