import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';

export const LayoutContainer = styled.div`
  margin: auto;
  margin-top: ${(props) => (props.withHeroHeader ? '0' : '100px')};
  max-width: 800px;
  padding: 0 20px;
  min-height: ${(props) => (props.withHeroHeader ? 'calc(100vh - 522px)' : 'calc(100vh - 152px)')};
  ${media.desktop`padding: 0;`}
`;
