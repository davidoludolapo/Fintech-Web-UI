import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../img/phone.svg";
import ring from "../img/ring.png";
import message1 from "../img/message_pink.svg";
import message2 from "../img/message_blue.svg";


const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 4rem;

    h1 {
      font-size: 4rem;
      font-weight: 600;
      color: white;
      letter-spacing: 1px;
    }

    .white {
      padding: 1.4rem 0;
      color: white;
      line-height: 1.8rem;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;

     .phone{
         width: 80%;
     }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
    }
  }
`;

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart Banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, officiis dolor. Odit fugit impedit pariatur accusantium
            sint aspernatur atque, id enim totam fuga vel suscipit, laboriosam
            adipisci cupiditate ipsum error.
          </p>
          <SecondaryButton name={"Register Now"} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt=""  className="phone"/>
        <img src={ring} width={50} height={50} className="ring1" alt="" />
        <img src={message1} className="message1" alt="" />
        <img src={message2} className="message2" alt="" />
      </div>
    </HeaderContentStyled>
  );
}

export default HeaderContent;
