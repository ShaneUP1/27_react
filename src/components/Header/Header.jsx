import React, { Component } from 'react';
import logo from '../../images/xfiles_logo.png';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className={styles['main-logo']} src={logo} />
        
      </div>
    );
  }
}
