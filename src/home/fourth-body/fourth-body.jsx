import React from "react";
import FirstBody from "../first-body/first-body";
import mekelle from '../../Assets/mekelle.jpg';
import gondare from '../../Assets/gondar.jpg';
import axum from '../../Assets/axum.jpg';
import jimma from '../../Assets/jimma.jpg';


function FourthBody(){

  const list =[
    mekelle,
    axum,
    jimma,
    gondare
  ]

    return <section className="fourth-body">
         <div className="f-description">
            <h1 style={{color:"red",fontSize:"35px"}}>POPULAR</h1>
               <h1 style={{color:"silver",fontSize:"35px", marginBottom:"10px"}}>CITIES</h1> 
               <p style={{color:'white'}}>Frequently visited cities <br/>known for unique stays.</p>
         </div>
         <div className="f-container">
         {list.map((list,index)=>
            <img className=" f-body-img" src={list}></img>
          )}
         </div>
       

    </section>
}
export default FourthBody;