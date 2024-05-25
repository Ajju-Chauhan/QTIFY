// Logo.jsx
import React from 'react';
import Logos from '../../assets/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={Logos} alt="Logo" />
    </div>
  );
};

export default Logo;
