import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ postEdges }) => {
  const posts = postEdges.map((p) => ({
    path: p.node.fields.slug,
    tags: p.node.frontmatter.tags,
    cover: p.node.frontmatter.cover,
    title: p.node.frontmatter.title,
    date: p.node.frontmatter.date,
    excerpt: p.node.excerpt,
    timeToRead: p.node.timeToRead,
  }));

  return (
    <div>
      {posts.map((post) => (
        <Link to={post.path} key={`post.title ${post.date}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default PostListing;
