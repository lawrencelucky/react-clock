import React from 'react';
import './Header.scss';
import sunIcon from '../../assets/icons/sun-icon.svg';
import moonIcon from '../../assets/icons/moon-icon.svg';

const Header = ({ darkMode }) => {
  let classes = 'header fixed-top';
  let img = <img className='icon' src={moonIcon} alt='moon-icon' />;
  const mode = localStorage.getItem('mode');

  if (mode === 'true') {
    img = <img className='icon' src={sunIcon} alt='sun-icon' />;
    classes += ' dark';
  }

  return (
    <div className='header-container'>
      <header className={classes}>
        <h2>moment</h2>
        <div onClick={darkMode} className='icons-container'>
          {img}
        </div>
      </header>
    </div>
  );
};

export default Header;
