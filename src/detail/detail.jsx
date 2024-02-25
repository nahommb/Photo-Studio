import React from "react";
import Header from "../home/header/Header";
import SixthBody from "../home/sixth/sixth-body";
import FirstBody from "../home/first-body/first-body";
import DetailOne from "./detail-one";
import HorizontalScrollButton from "./scroll";

function Detail(){
    return<section className="detail-container">
        <Header/>
        <DetailOne/>
        <div style={{height:'50%',backgroundColor:"green"}}></div>
        <SixthBody/>
    </section>
}
export default Detail;