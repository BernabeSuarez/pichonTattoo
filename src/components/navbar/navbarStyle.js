import styled from "styled-components";
import { mobile, tablet } from "../../utils/media/queries";
import { FiMenu, FiXSquare } from "react-icons/fi";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #081014c5; //rgba(140, 54, 57, 1);
  z-index: 3;

  & a{ text-decoration: none;}
  
  ${mobile} {
    padding: 0 5%;
  }
`;

export const MenuIconOpen = styled(FiMenu)`
  width: 35px;
  height: 35px;
  display: none;
  color: white;
  ${mobile} {
    display: flex;
  }
  ${tablet} {
    display: flex;
  }
`;
export const MenuIconClose = styled(FiXSquare)`
  width: 35px;
  height: 35px;
  display: none;
  color: white;
  ${mobile} {
    display: flex;
  }
  ${tablet} {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin: 0 40px;
  justify-content: center;
  align-items: center;
  z-index: -1;
 
  & span {
    width: 100%;
    max-width: 150px;
    min-width: 70px;
    display: flex;
    font-family: "Bebas Neue", cursive;
    font-size: 2em;
    color: #fafafa;
    cursor: pointer;
    &:hover {
      color: #c90a02;
    }
  }
  
  ${mobile} {
    display: none;
  }
  ${tablet} {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 40px;

  ${mobile} {
    display: none;
  }
  ${tablet} {
    display: none;
  }
  
  & a {
    margin: 0 10px;
    border: 1px transparent;
    height: 80%;
    text-decoration: none;
    text-transform: uppercase;
    color: #fafafa;
    font-weight: 200;
    transition:  0.3s;
  }
  & a:hover {
    transform: scale(1.15);
    color: #c90a02;
  }

  ${mobile} {
    display: none;
  }
  ${tablet} {
    display: none;
  }
`;