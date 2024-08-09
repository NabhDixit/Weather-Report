import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherReport=(props)=>{
    
    const [temp,setTemp]=useState();
    const [mintemp,setmintemp]=useState();
    const [maxtemp,setmaxtemp]=useState();
    useEffect(()=>{
        async function getWeatherData(){
            try{
               const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=f41f9e6c43fa60610c7662ce7711dce4&units=metric`);
               //console.log(res.data.main);
               setTemp(res.data.main.temp);
               setmintemp(res.data.main.temp_min);
               setmaxtemp(res.data.main.temp_max);
            }
            catch(error){
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
        getWeatherData();
    });

    //const weatherData = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=f41f9e6c43fa60610c7662ce7711dce4&units=metric`
    return (
        <>
            <h2>WeatherReport:</h2>    
                <div className='searchbar'>
                    <h3 style={{color: '#093d77' , fontWeight:'bold'}}>{props.cityName} </h3>
                    <h4> {temp}</h4>
                    <p>Min: {mintemp} | Max: {maxtemp}</p>
                </div>
        </>
      );
}
export default WeatherReport;