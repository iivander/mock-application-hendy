import React from 'react';
import './HorizontalLine.scss';

const HorizontalLine = ({ width = '100%' }) => (
  <hr className="horizontal-line" style={{ width: width }} />
)

export default HorizontalLine;
