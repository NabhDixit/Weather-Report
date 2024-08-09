import React from 'react';
import Header from './Header';

function Contact(props) {
  return (
    <>
      <Header/>
      <h1>This is {props.name} Page</h1>
    </>
  );
}

export default Contact;
