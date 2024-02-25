import React from "react";
import Header from "../home/header/Header";
import SixthBody from "../home/sixth/sixth-body";
import FirstBody from "../home/first-body/first-body";
import DetailOne from "./detail-one";

function Detail(){
    return<section className="detail-container">
        <Header/>
        <DetailOne/>
        <SixthBody/>
    </section>
}
export default Detail;