import React from "react";
import goods from "../Goods.js";


function Goods(props){
  return <div>
    <div className="card">
      <img
        className= "goodimg"
        src={props.imgURL}
        alt={props.alt}
      />
      <p><strong>{props.name}</strong></p>
      <p>{props.price}</p>
    </div>
    <button className="goodbtn" type="submit"><strong>Bulk Buy</strong></button>
  </div>
}

export default Goods