import React,{useState,useEffect} from 'react';
//import Header from './Header';
import axios from "axios";

const Sresult=(props)=> {
    const [name,setName]= useState();
    const [weight, setWeight]= useState();

    useEffect(()=>{
        async function getData(){
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.numData}`);
                console.log(res.data); // Use res.data to log the response data
                setName(res.data.name);
                setWeight(res.data.weight);
                //setMoves(res.data.moves.length);
            } catch (error) {
                if (error.response) {
                    // The request was made, but the server responded with a status code that falls out of the range of 2xx
                    console.error('Error response:', error.response);
                    console.error('Error status code:', error.response.status);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('Error request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error message:', error.message);
                }
            }
        }
        // call function
        getData();
    });

  return (
    <>
      <div className='searchbar'>
        <p>Name: {name}</p>
        <p>Weight: {weight}</p>
      </div>
    </>
  );
};

export default Sresult;
