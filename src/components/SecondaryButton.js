import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const SecondaryButtonStyled = styled.button`
  border-radius: 6px;
  background: #222;
  white-space: nowrap;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 19px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrow {
    padding-left: 0.9rem;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #111;

    .arrow {
      padding-left: 1.4rem;
      transition: all 0.5s ease-in-out;
    }
  }
`;

function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyled>
      {name}
      <div className="arrow">
        <IoIosArrowForward />
      </div>
    </SecondaryButtonStyled>
  );
}

export default SecondaryButton;
