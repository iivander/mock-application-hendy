import React from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import './TextBlock.scss';

const TextBlock = ({ children }) => (
  <div className="text-block">
    {children}
  </div>
)

const TextBlockHorizontalLine = ({ width }) => (
  <HorizontalLine width={width} />
);

const TextBlockContent = ({ isBold = false, children }) => (
  <div className={`text-block-content ${isBold ? 'font-weight-bold' : 'font-weight-normal'}`}>
    {children}
  </div>
)

TextBlock.HorizontalLine = TextBlockHorizontalLine;
TextBlock.Content = TextBlockContent;

export default TextBlock;
