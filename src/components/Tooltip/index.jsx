import React from 'react';
import { Cursor, Relative } from './styles';
const Tooltip = ({ children, text = 'TEXT' }) => {
  return (
    <Cursor>
      <span>{text}</span>
      <Relative>{children}</Relative>
    </Cursor>
  );
};
export default Tooltip;
