import React from 'react';
import { Link } from 'react-router-dom';

export default () =>
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li><Link to="/" className="navbar-brand" href="#">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
