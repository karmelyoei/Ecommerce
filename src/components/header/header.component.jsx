import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);
