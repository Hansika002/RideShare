import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './styles.module.css';

const Navbar = () => {
    return (
      <div>
      <nav className={navbar.navbar}>
        <div className={navbar.links}>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/Add">Add</Link>
        </div>
      </nav>
      </div>
    );
};

export default Navbar;