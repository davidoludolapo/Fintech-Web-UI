import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import startup from "../img/Startup.svg";

const InfoSectionStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* padding-top: 13.5rem; */
  .left-content {
    display: flex;
    align-items: center;
    padding: 6rem;
    padding-right: 3rem;
    .white {
      color: white;
    }
    h1 {
      font-size: 4rem;
      font-weight: 600;
     
    }
    p {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .phone {
      width: 100%;
      height: 600px;
    }
  }
`;

function InfoSection() {
  return (
    <InfoSectionStyled>
      <div className="right-content">
        <img src={startup} alt="" className="phone" />
      </div>
      <div className="left-content">
        <div className="left-text-container">
          <h2 className="secondary-heading">Access investment opportunities</h2>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            temporibus tempore culpa hic! Assumenda suscipit quaerat sit fugit
            earum ad!
          </p>
          <SecondaryButton name={"Register Now"} />
        </div>
      </div>
    </InfoSectionStyled>
  );
}

export default InfoSection;
