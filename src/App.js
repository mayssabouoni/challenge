import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Portfolio from "./component/Portfolio";
import userImg from "./image/user.jpg";
import Videos from "./component/Videos"

function App() {

  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }
  return (
    <div className="App">
      <h1 style={{textAlign:'center' , color:'rgb(158, 158, 14)', fontSize:60}}> welcome </h1>


      <img className="photo"
          style={{width: "300px", height: "300px",justifyContent:'left'  }}
          src={userImg}
          alt="avatar"></img>
      <Portfolio
        fullName="mayssa bouoni"
        Age="23 "
        country="tunisia"
        bio=" my name is mayssa bouoni and i was a management student"
        profession="  i'm currently a Full-Stack js student at GO MY CODE "
        mail="mayssabouoni@gmail.com"
        handleName={handleName}> </Portfolio>
        <br/>
        <Videos></Videos>



  



        
    </div>
  );
}

export default App;
