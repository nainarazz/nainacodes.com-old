import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Pre, FileName, Line, Container } from './code-block.style';

const getLinesToHighlight = (linesToHightlight) => linesToHightlight.split(',').map((l) => +l);

export const CodeBlock = ({ children, className, filename, linesToHighlight }) => {
  const highlightLines = linesToHighlight ? getLinesToHighlight(linesToHighlight) : [];
  const language = className.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Container>
          {filename && <FileName>{filename}</FileName>}
          <Pre className={className}>
            {tokens.slice(0, tokens.length - 1).map((line, i) => (
              <Line
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                {...getLineProps({ line, key: i })}
                highlight={highlightLines.includes(i + 1)}
              >
                {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))}
          </Pre>
        </Container>
      )}
    </Highlight>
  );
};
