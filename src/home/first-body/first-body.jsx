import React from "react";
import { Link } from "react-router-dom";

function FirstBody(){
const list =[
   'kal',
   'messi',
   'ronaldo',
   'neymar',
   'Roony'
]

function showDetail(){
   console.log('pressed')
}

    return <section className="middle-body">
     <div className="item-one">
     <div>
       <h1 style={{fontSize:'40px',color:"silver"}}>BEST </h1>
        <h1 style={{color:"red",fontSize:'40px',marginBottom:'20px'}}>STAYS</h1>
        <p>Best of YegnaHome</p>  
     </div>
       
        
     </div>
     <div className="item-container">
        {list.map((list,index)=>
        <Link to={'/detail'} style={{textDecoration:'none'}}><div key={index} className="item" onClick={showDetail}>
        <img className="ad-img" src={"https://picsum.photos/id/231/300/200"}></img>
        <div style={{padding:'15px'}}>
             <h3>22 Furnished Apartment YH - 0203</h3>
                <p> 3 bed rooms in Addis Ababa</p> 
                <br></br>
                <h3 style={{color:"red"}}>2352 USD</h3> 
                <h5>132936 ETB</h5>
        </div>
       

        
        
    </div></Link>
    )}
     </div>
  
    </section>
}

export default FirstBody;