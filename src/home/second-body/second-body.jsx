import React from "react";
import mekelle from '../../Assets/mekelle.jpg';
import gondare from '../../Assets/gondar.jpg';
import axum from '../../Assets/axum.jpg';
import jimma from '../../Assets/jimma.jpg';

function SecondBody(){
    const list =[
        mekelle,
        axum,
        jimma,
        gondare
      ]
    return <section className="middle-section">
    <div className="second-body-description">
                    <h1 style={{color:'red',}}> PROPERTY </h1>
                    <h1 style={{color:"silver"}}>TYPES</h1>
                    <p>Properties you can<br/> reserve on Yegna <br/> Home.</p>
    </div>
        <div className="bodyy">
               {list.map((list,index)=> 
               <div className="dv">
               <img className="dv1" src={list}></img>
               <h4>{list}</h4>
               </div>)
               }

    </div>
    </section> 
}

export default SecondBody;