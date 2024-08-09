import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Error=()=> {
  
  const navigate = useNavigate();
  const homePage=()=>{
    navigate('/');
  }
  return (
    <>
      <Header/>
      <h1> !OOPs Page not Found </h1>
      <button onClick={homePage}>Back to Home</button>
    </>
  );
};

export default Error;
