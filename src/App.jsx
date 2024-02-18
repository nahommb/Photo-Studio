import React from "react";
import Header from "./home/header/Header";
import Boarding from "./home/boarding/Boarding";
import FirstBody from "./home/first-body/first-body";
import SecondBody from "./home/second-body/second-body";
import ThirdBody from "./home/third-body/thirdBody";
import FourthBody from "./home/fourth-body/fourth-body";
function App(){

return<div>
  <Header></Header>
  <Boarding></Boarding>
  <SecondBody></SecondBody>
  <FirstBody></FirstBody>
  <ThirdBody></ThirdBody>
  <FourthBody></FourthBody>
</div>

}

export default App;