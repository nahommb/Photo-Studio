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
        <div style={{height:'50%',backgroundColor:"silver"}}>
        <iframe style={{width:'100%' ,height:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.831901631724!2d37.555789836709614!3d6.03313922712654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17babca139d76a0d%3A0x2ee07372b957b47e!2sEthiopian%20Airlines%20Ticket%20Office!5e0!3m2!1sen!2set!4v1709050988815!5m2!1sen!2set" ></iframe>

        </div>
        <SixthBody/>
    </section>
}
export default Detail;