import React from 'react';
import Container from './container';
import Dropdown from '../Dropdown';
import styles from './index.css';

export default Container(({ click, displayDropdown, dropdownClick, hideDropdown, name }) => (
  <div className={styles.container}>
    <div onClick={click} className={styles.user}>
      {name}
    </div>
    {displayDropdown && <Dropdown hideDropdown={hideDropdown} dropdownClick={dropdownClick} />}
  </div>
));
