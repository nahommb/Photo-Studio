import React from "react";
import Header from "./home/header/Header";
import Boarding from "./home/boarding/Boarding";
import FirstBody from "./home/first-body/first-body";
import SecondBody from "./home/second-body/second-body";
import ThirdBody from "./home/third-body/thirdBody";
import FourthBody from "./home/fourth-body/fourth-body";
import FifthBody from "./home/fifth-body/fifth-body";
import SixthBody from "./home/sixth/sixth-body"
import Fixed from "./home/Fixed-back/fixed";

function App(){

return<div className="app">
  <Fixed></Fixed>
  <Header></Header>
  <Boarding></Boarding>
  <FirstBody></FirstBody>
  <SecondBody></SecondBody>
  <ThirdBody></ThirdBody>
  <FourthBody></FourthBody>
  <FifthBody></FifthBody>
  <SixthBody></SixthBody>
</div>

}

export default App;