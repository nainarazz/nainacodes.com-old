import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  return (
    <div>
      {getPostList().map((post) => (
        <Link to={post.path} key={`post.title ${post.date}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default PostListing;
