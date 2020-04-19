import styled from 'styled-components';
import themeColor from '../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';

const { brand, color } = themeColor;

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.div`
  margin-bottom: 2em;

  h1 {
    color: ${brand.darkShade};
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    ${media.desktop`justify-content: flex-start;`}
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    background: ${color.lightgrey};
    margin-left: 2rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
  }
`;
