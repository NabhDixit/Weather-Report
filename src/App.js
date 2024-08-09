//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import Services from './Services';
import Service1 from './Service1';
import Service2 from './Service2';
import User from './User';
import Search from './Search';

const App=() =>{
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="About"/>} />
        <Route path="/contact" element={<Contact name="Contact"/>} />
        <Route path="/services" element={<Services />}>
          <Route path="service1" element={<Service1 />} />
          <Route path="service2" element={<Service2 />} />
        </Route>
        <Route path="/user/:fname/:lname" element={<User/>}/>
        <Route path="/search" element={<Search name="Search"/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default App;
