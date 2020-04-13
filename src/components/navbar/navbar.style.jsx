import styled from 'styled-components';
import { Link } from 'gatsby';
import themeColor from '../../config/theme';

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
  padding: 0 1.5rem;
  width: 100%;
  color: ${brand.darkShade};
  max-width: 800px;
  margin: auto;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuItems = styled.div`
  justify-content: space-between;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  color: ${brand.darkShade};
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${brand.darkShade};
  }
`;
