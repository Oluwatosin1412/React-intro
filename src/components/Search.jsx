import React from "react";


function Search(){
  return <div>
    <input id="search" placeholder="    Enter your search text"></input>
    <button className="btn" type="submit">Search</button>
    <h1 className="text" >Available Products</h1>
  </div>
}

export default Search