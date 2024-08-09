import React from 'react';
import logo from './images/logo.png';
import { NavLink} from 'react-router-dom';

const Header=()=> {
  return (
    <>
      <header className='headerClass'>
        <img src={logo} alt="Logo"/>
        <div className='menuItem'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Service</NavLink>
                    <ul className='submenu'>
                        <li>
                            <NavLink to="/services/service1">Service1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/service2">Service2</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/user/nabh/dixit">User</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
