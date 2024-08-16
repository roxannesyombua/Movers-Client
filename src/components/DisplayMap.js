import React from "react";
import Maps from "./Maps";
import SearchBox from "./SearchBox";


function DisplayMap() {
  return (
    <div
     style={{
      display: 'flex', 
      flexDirection: "row",
      width: '100vw',
      height: "100vh" 

    }}
    >

      <div
       style={{
        border:"2px solid green",
        width:"80vw",
        height: "100vh", 
      }}  
      >
        <Maps /> 
      </div>

    <div
    style={{
      border:"2px solid blue",
      width:"30vw",
      height: "100vh", 
      flexGrow: 1, // adjust flex-grow to adjust the width of the SearchBox and Maps components
    }}
    >
        <SearchBox />
    </div>

      

    </div>
  );
}

export default DisplayMap;
