import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';

// eslint-disable-next-line import/prefer-default-export
export const LayoutContainer = styled.div`
  margin: auto;
  margin-top: ${(props) => (props.withHeroHeader ? '0' : '75px')};
  max-width: 800px;
  padding: 10px 1.2em 20px;
  min-height: ${(props) => (props.withHeroHeader ? 'calc(100vh - 522px)' : 'calc(100vh - 152px)')};
  ${media.desktop`padding: 0;`}
`;
