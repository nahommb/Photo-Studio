import React from "react";
function MainBody(){
   const list = [
    'lee',
    'dude',
    'andress',
    'garnacho'
   ]
    return <section className="middle-section">
    <div style={{textAlign:'end'}}>
                    <h1 style={{fontSize:"45px",color:'red',}}> PROPERTY </h1>
                    <h1 style={{fontSize:'45px',color:"silver"}}>TYPES</h1>
                    <p>Properties you can<br/> reserve on Yegna <br/> Home.</p>
    </div>
        <div className="bodyy">
               {list.map((list,index)=> 
               <div className="dv1">{list}</div>)
               }

    </div>
    </section> 
}

export default MainBody;