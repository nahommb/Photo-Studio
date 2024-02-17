import React from "react";
import Header from "./Header";
import Boarding from "./Boarding";
import MainBody from "./models/MainBody";
import MiddleBody from "./models/middleBody";
import ThirdBody from "./models/ThirdBody";
function App(){

return<div>
  <Header></Header>
  <Boarding></Boarding>
  <MiddleBody></MiddleBody>
  <MainBody></MainBody>
  <ThirdBody></ThirdBody>
</div>

}

export default App;