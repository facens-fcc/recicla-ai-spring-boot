import React from 'react';
import style from './Button.module.css';

const Button = ({ children, ...props }) => {
  const variantHandler = () => {
    switch (props.variant) {
      case 'primary':
        return style.primary;
      case 'secondary':
        return style.secondary;
      default:
        return style.primary;
    }
  };

  const tagHandler = () => {
    return props.href ? 'a' : 'button';
  };

  const Tag = tagHandler();

  return (
    <Tag className={`${style.button} ${variantHandler()}`} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
