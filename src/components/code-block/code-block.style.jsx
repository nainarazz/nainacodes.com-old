import styled from 'styled-components';
import themeColor from '../../config/theme';

const { brand } = themeColor;

export const Container = styled.div`
  background: #1d1f21;
  overflow: auto;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const Pre = styled.pre`
  width: fit-content;
  margin: 10px 0;
`;

export const LineNumber = styled.div`
  display: inline-block;
  margin-right: 20px;
  color: #56bd28;
`;

export const FileName = styled.div`
  background: ${brand.darkShade};
  color: #fff;
  padding: 10px 20px 0;
  font-style: italic;
`;

export const Line = styled.div`
  padding: ${(props) => (props.highlight ? '0' : '0 10px')};
  background: ${(props) => (props.highlight ? 'rgb(201, 167, 255, 0.2)' : '')};
  border-left: ${(props) => (props.highlight ? ' 10px solid purple' : '')};
`;
