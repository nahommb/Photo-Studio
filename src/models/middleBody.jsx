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

    {list.map((list,index)=>
    <div key={index} className="item">

   <h1>{list}</h1> 

    </div>)}
          
          {/* <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div> */}
    </section>
}

export default MiddleBody;