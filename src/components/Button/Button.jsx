import React from 'react';
import style from './Button.module.css';

const Button = ({ children, ...props }) => {
  const Tag = props.href ? 'a' : 'button';

  return (
    <Tag className={style.button} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
