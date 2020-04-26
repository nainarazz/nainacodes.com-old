import React from 'react';
import { PostHeader, Title, DateThumbnail, Month, Day, Year } from './post-listing.style';

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
    <div>
      {posts.map((post) => (
        <PostHeader to={post.path} key={`post.title ${post.date.getTime()}`}>
          <DateThumbnail>
            <Month>{monthDictionary[post.date.getMonth()]}</Month>
            <span> </span>
            <Day>{post.date.getDate()}</Day>
            <Year>{post.date.getFullYear()}</Year>
          </DateThumbnail>
          <Title>{post.title}</Title>
        </PostHeader>
      ))}
    </div>
  );
};

export default PostListing;
