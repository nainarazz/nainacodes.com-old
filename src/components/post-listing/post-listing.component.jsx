import React from 'react';
import { PostHeader, Title, Meta } from './post-listing.style';

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

const PostListing = ({ postEdges }) => {
  const posts = postEdges.map((p) => ({
    path: p.node.fields.slug,
    tags: p.node.frontmatter.tags,
    cover: p.node.frontmatter.cover,
    title: p.node.frontmatter.title,
    date: new Date(p.node.frontmatter.date),
    excerpt: p.node.excerpt,
  }));

  return (
    <div style={{ margin: '10px 0' }}>
      {posts.map((post) => (
        <PostHeader key={`post.title ${post.date.getTime()}`} to={post.path}>
          <Meta>
            <div className="date">
              {monthDictionary[post.date.getMonth()]} {post.date.getDate()},{' '}
              {post.date.getFullYear()}
            </div>
          </Meta>
          <Title>{post.title}</Title>
        </PostHeader>
      ))}
    </div>
  );
};

export default PostListing;
