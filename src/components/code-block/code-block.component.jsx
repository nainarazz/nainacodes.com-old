import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Pre, LineNumber } from './code-block.style';

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre className={className}>
          {tokens.slice(0, tokens.length - 1).map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} {...getLineProps({ line, key: i })}>
              <LineNumber>{i + 1}</LineNumber>
              {line.map((token, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
