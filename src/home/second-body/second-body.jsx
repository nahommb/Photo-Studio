import React from "react";
import mekelle from '../../Assets/mekelle.jpg';
import gondar from '../../Assets/gondar.jpg';
import axum from '../../Assets/axum.jpg';
import jimma from '../../Assets/jimma.jpg';

function SecondBody(){
    const list ={
        mekelle:mekelle,
        axum:axum,
        jimma:jimma,
        gondare:gondar
    }
     

    return <section className="middle-section">
    <div className="second-body-description">
                    <h1 style={{color:'red',}}> PROPERTY </h1>
                    <h1 style={{color:"silver"}}>TYPES</h1>
                    <p>Properties you can<br/> reserve on Yegna <br/> Home.</p>
    </div>
        <div className="bodyy">
               {Object.entries(list).map(([key,value])=> 
               <div className="dv">
               <img className="dv1" src={value}></img>
               <h4>{key}</h4>
               </div>)
               }

    </div>
    </section> 
}

export default SecondBody;