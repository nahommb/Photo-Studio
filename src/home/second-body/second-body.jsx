import React from "react";
function SecondBody(){
   const list = [
    'lee',
    'dude',
    'andress',
    'garnacho'
   ]
    return <section className="middle-section">
    <div className="second-body-description">
                    <h1 style={{color:'red',}}> PROPERTY </h1>
                    <h1 style={{color:"silver"}}>TYPES</h1>
                    <p>Properties you can<br/> reserve on Yegna <br/> Home.</p>
    </div>
        <div className="bodyy">
               {list.map((list,index)=> 
               <div className="dv1">{list}</div>)
               }

    </div>
    </section> 
}

export default SecondBody;