import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import logo from '../../assets/logo.svg';

function Header() {
  const reserveSize = useSelector(state => state.reserve.length);

  return(
    <header className="container">
      <Link to="/">
        <img src={logo} alt="Logo do projeto" className="logo" />
      </Link>

      <Link to="/reservations" className="reservation" >
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;