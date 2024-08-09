import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const About=(props)=> {

  const navigate = useNavigate();

  const contactUs=()=>{
    navigate("/contact");
  }
  return (
    <>
      <Header/>
      <h1>This is {props.name} Page</h1>
      <p>After click  below button move to contact page using "useNavigate Hook"</p>
      <button onClick={contactUs}>Contact Us</button>
    </>
  );
};

export default About;
