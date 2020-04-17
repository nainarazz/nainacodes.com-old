import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

export const StyledFooter = styled.footer`
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  display: flex;
  height: 60px;
  padding: 10px 1.2em 20px;
  ${media.desktop`padding: 0;`}
`;

export const NoticeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;