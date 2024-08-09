import React from 'react';
import Header from './Header';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// useHistory replace by "useNavigate"
function User() {
    const {fname,lname} =useParams();
    const location=useLocation();

    const navigate= useNavigate();
    //console.log(navigate);

    return (
        <>
        <Header/>
        <h1>User {fname} {lname} Page</h1>
        <p>Your current location is {location.pathname}</p>
        <p>Search Params: {location.search}</p>
        <p>Hash: {location.hash}</p>
        {
            location.pathname === `/user/nabh/dixit` ? (
                <button onClick={()=>navigate(-1)}>Go Back navigate(-1)</button>
                ): null
        }
        </>
    );
}

export default User;
