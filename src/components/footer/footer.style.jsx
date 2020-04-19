import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

export const StyledFooter = styled.footer`
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  display: flex;
  padding: 10px 1.2em 20px;
  flex-direction: column-reverse;
  ${media.desktop`padding: 0;`}
  ${media.tablet`flex-direction: row;`}
`;

export const NoticeContainer = styled.div`
  display: flex;

  h4 {
    line-height: 2;
    margin: 0;
  }
`;
