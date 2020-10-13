import React from 'react';
import { StyledComment } from './comment.style';

const Comment = ({commentBox}) => (<StyledComment ref={commentBox} />);
export default Comment;