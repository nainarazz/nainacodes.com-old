import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../config/media';

// eslint-disable-next-line import/prefer-default-export
export const LayoutContainer = styled.div`
  margin: auto;
  margin-top: 75px;
  max-width: 800px;
  padding: 10px 1.2em 20px;
  min-height: ${(props) => (props.withHeroHeader ? 'calc(100vh - 500px)' : 'calc(100vh - 145px)')};
  ${media.desktop`padding: 0;`}
`;
