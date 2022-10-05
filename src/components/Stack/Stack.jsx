import React from 'react';
import style from './Stack.module.css';

const Stack = ({ children }) => {
  return <div className={style.stack}>{children}</div>;
};

export default Stack;
