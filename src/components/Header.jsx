import React from "react";
import styled from "styled-components";
import bg from "../img/bg2.svg"
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const HeaderStyled = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }

`;

function Header() {
  return (
    <HeaderStyled>
       <div className="header-content">
          <Navbar/>
          <HeaderContent/>
       </div>
    </HeaderStyled>
  )
}

export default Header;
