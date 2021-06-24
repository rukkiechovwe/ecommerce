import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: #fff;

  @media (min-height: 200px) {
    position: sticky;
    top: 0;
  }
`;
export const Container = styled.nav`
  padding: 1rem;
  @media (min-height: 200px) {
    box-shadow: 0px 2px 10px 4px #5e5d5d2b;
  }
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #000000;
`;

export const Logo = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  font-family: "Righteous";
  
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
export const NavLink = styled(Link)`
  display: inline-block;
  font-size: .86rem;
  text-transform: uppercase;
font-weight: 600;
padding: 0 1rem;

  @media only screen and (max-width: 768px) {
  }
`;
