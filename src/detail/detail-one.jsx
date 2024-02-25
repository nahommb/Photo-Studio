import DetailForm from "./detail-form"
import React from "react";


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
              <div className="photo-1"></div>
              <div className="scroll-container">
                <button onClick={this.scrollToLeft}>left</button>
                  <div id = "scrollTarget" className="scroll-photo">
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>
                         <div></div>

                    </div>
               <button onClick={this.scrollToRight}>right</button>
               
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