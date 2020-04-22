import styled from 'styled-components';
import themeColor from '../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';

const { brand, color } = themeColor;

export const SearchContainer = styled.div`
  margin-bottom: 2em;
  display: flex;
`;

export const Search = styled.input`
  border-radius: 6px;
  padding: 0.6rem;
  outline: none;
  font-size: 0.8rem;
  line-height: 1;
  border: 2px solid ${color.lightgrey};
  width: 100%;
  ${media.tablet`width: 50%;`}
`;

export const FilterCount = styled.div`
  margin: 0 10px;
  color: ${brand.lightAccent};
  font-weight: 600;
  line-height: 1;
  padding: 0.6rem;
`;
