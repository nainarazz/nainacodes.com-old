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
    font-size: 1.5rem;
    color: ${color.white};
  }

  h2 {
    margin: 0;
    color: ${brand.lightShade};
    font-size: 1.3rem;
  }

  h3 {
    margin: 0;
    color: ${brand.lightAccent};
    font-size: 1.1rem;
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

  ${media.phablet`
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
  `}

  ${media.desktop`
  text-align: left;
    margin-right: 15%;
  `}
`;

export const SocialIconContainer = styled.div`
  margin-top: 20px;
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
