import React from 'react'
import "./Portfolio.css";

const Portfolio = (props) => {
    return (
        <div>
      <div className="profile">
      <div className="avatar">{props.children}</div>
      <div className="parent">
        <h1>
          <span className="test"> FullName: </span>
          {props.fullName}{" "}
        </h1>
        <h2>
          {" "}
          <span className="test"> Age  : </span>
          {props.Age }{" "}
        </h2>
        <h3>
          {" "}
          <span className="test"> country: </span>
          {props.country}{" "}
        </h3>
        <h4>
          {" "}
          <span className="test"> bio: </span>
          {props.bio }{" "}
        </h4>

        <h5>
          {" "}
          <span className="test"> profession: </span>
          {props.profession }{" "}
        </h5>


        <h6>
          {" "}
          <span className="test"> mail: </span>
          {props.mail }{" "}
        </h6>





        <button  className="btn"
          onClick={() => props.handleName(props.fullName)}
         
        >
          clickme{" "}
        </button>
      </div>
    </div>






            
        </div>
    )
}

export default Portfolio
