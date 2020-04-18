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

export const Title = styled.span`
  font-size: 1.4em;
`;

export const DateThumbnail = styled.div``;

export const Day = styled.span`
  color: ${brand.darkShade};
`;

export const Month = styled.span`
  color: ${brand.darkShade};
`;

export const Year = styled.div`
  color: ${brand.lightAccent};
  letter-spacing: 2px;
  font-size: 1.3em;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${brand.darkShade};
`;
