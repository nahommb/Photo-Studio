import DetailForm from "./detail-form"
import React from "react";
import { NavigateBefore , NavigateNext } from "@mui/icons-material";
import { IconButton } from "@mui/material";

class DetailOne extends React.Component {


     scrollToLeft = () => {
          const element = document.getElementById('scrollTarget');
          if (element) {
            element.scrollLeft -= 200; // Adjust the value as needed
          }
        };
        scrollToRight = () => {
          const element = document.getElementById('scrollTarget');
          if (element) {
            element.scrollLeft += 200; // Adjust the value as needed
          }
        };

  

    render() {      
      const imagList =[
          'kal',
          'messi',
          'ronaldo',
          'neymar',
          'Roony'
       ]

     return (
       <div> 
          <div className="detail-one-item-1">
               <h1>22 Furnished Apartment YH -</h1>
               <h2>0203</h2>
               <br/>
               <p>Behind Axum Hotel</p>
               <DetailForm/>
         </div>
     <section className="detail-one">
         <div className="detail-one-item-2">
              <div className="photo-1">
                <img src="https://picsum.photos/id/149/500/500"></img>
              </div>
              <div className="scroll-container">
                <IconButton onClick={this.scrollToLeft}> <NavigateBefore/> </IconButton>
                  <div id = "scrollTarget" className="scroll-photo">
                  {imagList.map((list,index)=><img key={index} src="https://picsum.photos/id/249/500/500"></img>
                  
                   )}
                        
                         {/* <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div> */}

                    </div>
               <IconButton onClick={this.scrollToRight}> <NavigateNext/> </IconButton>
               
              </div>
           
              <div className="detail-one-item-3">
                akwjkdjawd
              </div>
         </div>
    </section>
    </div>
    );
    }
}

export default DetailOne;