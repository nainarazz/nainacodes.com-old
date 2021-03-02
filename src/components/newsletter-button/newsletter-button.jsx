import React from 'react';
import styled from 'styled-components';
import themeColor from '../../config/theme';

const { color, brand } = themeColor;

const StyledNewsletterButton = styled.a`
  background: ${brand.darkShade};
  padding: 1rem 1.5rem;
  margin: 0.8rem 0;
  display: inline-block;
  border: 1px solid ${brand.darkShade};
  border-radius: 8px;
  text-align: center;
  color: ${color.white};
`;

const NewsletterButton = () => (
  <StyledNewsletterButton>
    Join Newsletter{' '}
    <span className="emoji" role="img" aria-labelledby="newsletter">
      📬
    </span>
  </StyledNewsletterButton>
);

export default NewsletterButton;
