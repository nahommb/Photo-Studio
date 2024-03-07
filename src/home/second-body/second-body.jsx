import React from "react";
function SecondBody(){
   const list = [
    'Lee',
    'Dude',
    'Andress',
    'Garnacho'
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
               <img className="dv1" src="https://picsum.photos/300/500"></img>
               <h4>{list}</h4>
               </div>)
               }

    </div>
    </section> 
}

export default SecondBody;