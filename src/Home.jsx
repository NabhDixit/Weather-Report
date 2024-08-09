import React, { useState } from 'react';
import Header from './Header';
import WeatherReport from './WeatherReport';

const Home=()=> {
  const [city,setCity] = useState("");

  const inputCity=(event)=>{
    const data= event.target.value;
    console.log(data);
    setCity(data);
  }

  return (
    <>
      <Header/>
      <h1>Home Page</h1>
      <h2 style={{textAlign:"center" , color:"#ff631b"}}>Enter City name for knowing what is weather there</h2>
      <div className="searchbar">
            <input type="" placeholder="Enter City name" 
                value={city}
                onChange={inputCity}
            />  
      {city === "" ? null : <WeatherReport cityName={city}/>} 
      </div>
    </>
  );
};

export default Home;
