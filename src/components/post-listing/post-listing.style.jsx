import styled from 'styled-components';
import { Link } from 'gatsby';
import themeColor from '../../config/theme';

const { color } = themeColor;

export const PostHeader = styled(Link)`
  padding: 15px 0;
  display: block;
  color: ${color.body};
  &:hover {
    background-color: ${color.lightgrey};
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;

  .date {
    font-size: 0.8rem;
    font-style: italic;
  }

  .tags {
    margin: 0 10px;
  }
`;

export const Tag = styled(Link)`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.8rem;
  color: ${(props) =>
    themeColor.techColor[props.tag] ? themeColor.color.white : themeColor.color.body};
  background-color: ${(props) => themeColor.techColor[props.tag] || themeColor.color.lightgrey};
`;

export const Title = styled.div`
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.body};
  line-height: 1.5;
`;
