import React from 'react';
import style from './Overtitle.module.css';

const Overtitle = ({ level, align, children }) => {
  const OvertitleTag = level;

  const alignmentClass = () => {
    switch (align) {
      case 'center':
        return style.center;
      case 'left':
        return style.left;
      default:
        return style.left;
    }
  };

  return <OvertitleTag className={`${style.overtitle} ${alignmentClass()}`}>{children}</OvertitleTag>;
};

export default Overtitle;
