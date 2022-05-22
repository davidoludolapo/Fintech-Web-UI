import React from "react";
import arrow from "../img/arrow.svg";
import blob1 from "../img/blob_top.svg";
import blob2 from "../img/blob_bottom.svg";
import styled from "styled-components";
import {IoIosArrowForward} from "react-icons/io"

const AnimatedButtonStyled = styled.button`
  border-radius: 6px;
  background: #222;
  white-space: nowrap;
  padding: 1rem 2rem;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .arrow {
    padding-left: 0.9rem;
    transition: all .4s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
   
    .blob1 {
      transform: translateX(-100px);
      transition: all 0.4s ease-in-out;
    }
    .blob2 {
      transform: translateX(140px);
      transition: all 0.4s ease-in-out;
    }

    .arrow{
        padding-left: 1.4rem;
        transition: all .4s ease-in-out;
    }
  }

  .blob1,
  .blob2 {
    position: absolute;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;

function AnimatedButton({ name }) {
  return (
    <AnimatedButtonStyled>
      {name}
      <div className="arrow">
        <IoIosArrowForward />
      </div>
      <img className="blob1" src={blob1} alt="" />
      <img className="blob2" src={blob2} alt="" />
    </AnimatedButtonStyled>
  );
}

export default AnimatedButton;
