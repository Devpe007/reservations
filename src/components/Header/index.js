import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

function Header() {
  return(
    <header className="container">
      <Link to="/">
        <img src={logo} alt="Logo do projeto" className="logo" />
      </Link>

      <Link to="/reservations" className="reservation" >
        <div>
          <strong>Minhas reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
      <h1>HEADER COMPONENT</h1>
    </header>
  );
};

export default Header;