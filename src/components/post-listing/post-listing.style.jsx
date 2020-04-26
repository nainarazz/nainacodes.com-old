import styled from 'styled-components';
import { Link } from 'gatsby';
import themeColor from '../../config/theme';

const { brand, color } = themeColor;

export const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 65px auto;
  grid-column-gap: 1em;
  border-bottom: 1px solid ${color.lightgrey};
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const Title = styled.span``;

export const DateThumbnail = styled.div`
  text-align: center;
`;

export const Day = styled.span``;

export const Month = styled.span``;

export const Year = styled.div`
  color: ${brand.lightAccent};
  font-weight: 600;
  text-align: center;
  line-height: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.body};
  line-height: 1.5;
`;
