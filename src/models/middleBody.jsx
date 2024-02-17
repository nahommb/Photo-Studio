import React from "react";
function MiddleBody(){
const list =[
   'kal',
   'messi',
   'ronaldo',
   'neymar',
   'Roony'
]
    return <section className="middle-body">
     <div className="item-one">
        <h1 style={{fontSize:'30px',color:"silver"}}>BEST </h1>
        <h1 style={{color:"red",fontSize:'30px',marginBottom:'20px'}}>STAYS</h1>
        <p>Best of YegnaHome</p>  
        
     </div>
    {list.map((list,index)=>
    <div key={index} className="item">
        <img src={"https://picsum.photos/id/231/300/200"} style={{borderRadius:'30px'}}></img>
        <div style={{padding:'15px'}}>
             <h3>22 Furnished Apartment YH - 0203</h3>
                <p> 3 bed rooms in Addis Ababa</p> 
                <br></br>
                <h3 style={{color:"red"}}>2352 USD</h3> 
                <h5>132936 ETB</h5>
        </div>
       

        
        
    </div>)}
    </section>
}

export default MiddleBody;