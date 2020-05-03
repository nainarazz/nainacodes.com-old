import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import media from '../../config/media';

// eslint-disable-next-line import/prefer-default-export
export const UserLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  ${media.thone`justify-content: initial;`}

  a {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }

  img {
    margin-bottom: 0;
  }
`;
