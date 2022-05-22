import React from "react";
import { useState } from "react";
import styled from "styled-components";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";

const QuestionStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1.4rem 1rem;
  border-radius: 25px;
  transition: all .4 ease-in-out;
  box-shadow: 0px 25px 50px rgba(22, 25, 29, 0.05);
  h4 {
    color: #333;
    font-size: 1.2rem;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;

function Question({ title, description }) {
  const [toggle, setToggle] = useState(true);

  const handleClick = () =>{
    setToggle(!toggle)
  }
  return (
    
    <QuestionStyled>
      <div className="question-container">
        <div className="toggle-title">
          <h4>{title}</h4>
          <button onClick={handleClick}>
           {toggle ?  <img src={minus} alt="" /> :  <img src={plus} alt="" />}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </QuestionStyled>
  );
}

export default Question;
