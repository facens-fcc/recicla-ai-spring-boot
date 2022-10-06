import React from 'react';
import style from './Heading.module.css';

const Heading = ({ level, size, align, children }) => {
  const HeadingTag = level;

  const sizeClass = () => {
    switch (size) {
      case 'lg':
        return style.large;
      case 'sm':
        return style.small;
      case 'md':
        return style.medium;
      default:
        return 'md';
    }
  };

  return <HeadingTag className={`${style.heading} ${sizeClass()}`}>{children}</HeadingTag>;
};

export default Heading;
