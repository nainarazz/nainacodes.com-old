import styled from 'styled-components';
import { Link } from 'gatsby';
import themeColor from '../../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

export const CoverImage = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  a {
    padding: 20px 0;
  }
`;

export const Title = styled.h1`
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const PostMeta = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${media.thone`width: initial;`}
`;

export const Tag = styled(Link)`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 4px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.8rem;
  color: ${(props) =>
    themeColor.techColor[props.tag] ? themeColor.color.white : themeColor.color.body};
  background-color: ${(props) => themeColor.techColor[props.tag] || themeColor.color.lightgrey};
`;

export const SocialLinkContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  text-align: right;
  ${media.thone`width: initial;`}
`;

export const TwitterShare = styled.a`
  display: inline-block;
  width: 100px;
  height: 30px;
  background-image: url('/images/twitter-share.png') !important;
  background-repeat: no-repeat;
`;

export const DateUpdate = styled.div`
  text-align: right;
  font-size: 0.8rem;
  font-style: italic;
`;

export const CommentsContainer = styled.div``;