import React from 'react';
import Header from './Header';
import { Outlet} from 'react-router-dom';

const Services=()=> {
  return (
    <>
      <Header/>
      {/* <h1>Our Services</h1> */}
      {/* <nav>
        <ul>
          <li><NavLink to="service1">Service 1</NavLink></li>
          <li><NavLink to="service2">Service 2</NavLink></li>
        </ul>
      </nav> */}
      {/* outlet for sharing */}
      <Outlet/>  
    </>
  );
};

export default Services;
