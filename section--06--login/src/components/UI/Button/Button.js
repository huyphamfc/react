import React from 'react';

import classes from './Button.module.css';


const Button = ({
  className,
  type,
  onClick,
  disabled,
  children
}) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;