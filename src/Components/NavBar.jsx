import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return ( <nav className="navbar navbar-light bg-big">
    <a className="navbar-brand" href="#">
    NavBar 
    <span className="badge badge-pill badge-secondary">
    {totalCounters}
    </span>
    </a>
    </nav>);
}
 
export default NavBar;