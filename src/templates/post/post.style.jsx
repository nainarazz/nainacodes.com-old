import styled from 'styled-components';
import themeColor from '../../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

export const CoverImage = styled.div`
  text-align: center;
  margin-bottom: 4em;
  a {
    padding: 20px 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${media.thone`width: initial;`}
`;

export const Tag = styled.div`
  height: 30px;
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
