import React, { useState } from "react";
import Header from "./Header";
import Sresult from "./Sresult";

function Search(props) {
    const [num,setNum]=useState("");

    const inputEvent=(event)=>{
        const data=event.target.value;
        //console.log(data);
        setNum(data);
    }

    return (
      <>
        <Header/>
        <div className="searchbar">
            <input type="" placeholder="Input Any Num" 
                value={num}
                onChange={inputEvent}
            />
        </div>
        {num === "" ? null : <Sresult numData={num}/>}
      </>
    );
  }
  
  export default Search;