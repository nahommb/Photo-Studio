import React from "react";
import FirstBody from "../first-body/first-body";

function FourthBody(){

  const list =[
    1,2,3,4
  ]

    return <section className="fourth-body">
         <div className="f-description">
            <h1 style={{color:"red",fontSize:"35px"}}>POPULAR</h1>
               <h1 style={{color:"silver",fontSize:"35px", marginBottom:"10px"}}>CITIES</h1> 
               <p style={{color:'white'}}>Frequently visited cities <br/>known for unique stays.</p>
         </div>
         <div className="f-container">
         {list.map((list,index)=>
            <img className=" f-body-img" src="https://picsum.photos/id/233/1000/700"></img>
          )}
         </div>
       

    </section>
}
export default FourthBody;