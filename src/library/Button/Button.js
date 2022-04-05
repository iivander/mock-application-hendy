import React from 'react';
import './Button.scss';

const Button = ({
  className,
  disabled,
  onClick,
  text,
}) => (
  <button
    className={className}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

export default Button;
