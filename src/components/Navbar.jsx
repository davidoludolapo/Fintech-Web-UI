import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* position: sticky;
  top: 0;
  z-index: 1; */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
const Logo = styled.nav`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
 
  list-style: none;
  text-align: center;

`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <Logo>Loob</Logo>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Join Us
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

      <PrimaryButton name={"Sign Up"} />
    </Nav>
  );
}

export default Navbar;
