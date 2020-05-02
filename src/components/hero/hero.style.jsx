import styled from 'styled-components';
import themeColor from '../../config/theme';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

const { brand, color } = themeColor;

export const HeaderColor = styled.div`
  background-color: ${brand.mainBrand};
  background: linear-gradient(to right, ${brand.darkShade}, ${brand.mainBrand});
  color: #fff;
  padding: 120px 2rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: auto;
  flex-direction: column-reverse;
  align-items: center;

  ${media.desktop`
  flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Intro = styled.div`
  line-height: 1.5;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 1.3rem;
    line-height: 2;
    color: ${color.white};
  }

  h2 {
    margin: 0;
    color: ${brand.lightShade};
    font-size: 1.1rem;
  }

  h3 {
    margin: 0;
    color: ${brand.lightAccent};
    font-size: 0.9rem;
  }

  ${media.phone`
  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }
  `}

  ${media.desktop`
  text-align: left;
    margin-right: 15%;
  `}
`;

export const TagsContainer = styled.div`
  margin-top: 20px;
  span {
    margin-right: 10px;
    font-weight: 600;
    padding: 6px;
    border-radius: 6px;
    font-size: 0.9em;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  margin-right: 20px;
  img {
    height: 35px;
  }
`;
export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
