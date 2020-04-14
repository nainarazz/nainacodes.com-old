import styled from 'styled-components';
import { Link } from 'gatsby';
import themeColor from '../../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

const { brand } = themeColor;

export const Container = styled.div`
  position: fixed;
  z-index: 400;
  background-color: #fff;
  width: 100%;
  height: 75px;
  display: flex;
  box-shadow: ${(props) => (props.shouldShowShadow ? '0 9px 9px -9px rgba(0, 0, 0, 0.5)' : '')};
  transition: top 0.3s;
  top: ${(props) => (props.shouldHideHeader ? '-75px' : 0)};
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.2em;
  width: 100%;
  color: ${brand.darkShade};
  max-width: 800px;
  margin: auto;
  ${media.tablet`padding: 0 1.2em;`}
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
  }

  img {
    height: 38px;
    width: 38px;
    vertical-align: middle;
  }

  span {
    margin-left: 10px;
    vertical-align: middle;
    font-weight: 600;
    display: none;
    ${media.phablet`display: inline;`}
  }

  &:hover {
    cursor: pointer;
  }
`;

export const MenuItems = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  padding: 10px 0 10px 20px;
  text-decoration: none;
  color: ${brand.darkShade};
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${brand.darkShade};
  }
`;
