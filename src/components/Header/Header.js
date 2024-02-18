import React from "react";
import "../Header/Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className='logo'>Boston City</h1>
      </Link>
      <nav>
        <NavLink to='/' className="nav-title">Home</NavLink>
        <NavLink to='/learn_more' className="nav-title">Candidate Info</NavLink>
        <NavLink to='/how_to_vote' className="nav-title">How to Vote</NavLink>

      </nav>

      <button class='button type1'></button>
    </header>
  );
}

export default Header;
