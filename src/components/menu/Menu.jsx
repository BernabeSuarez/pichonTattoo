import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../utils/media/queries";
import { useSelector, useDispatch } from "react-redux";
import * as menuActions from "../../redux/menu/menu-actions";

const MenuNav = styled.div`
  position: fixed;
  width: 100%;
  top: 80px;
  height: 100vh;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  background-color: #fffefd;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(-120%)`)};
  transition-property: transform;
  transition-duration: 0.9s;
  box-shadow: 17px 4px 19px 0px rgba(0, 0, 0, 0.52);
  z-index: 150;
  & a {
    position: relative;
    text-decoration: none;
    font-family: "Inter";
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    margin: 8% auto 2%;
    color: black;
  }
  & a:hover {
    color: #631a00;
  }
  & a:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 10px;
    background: #fd0202;
    opacity: 0.5;
    transform: translateY(-50%) scaleX(0);
    transform-origin: right;
    border-radius: 20px;
    transition: 0.8s transform;
  }
  & a:hover:before {
    transform: translateY(-50%) scaleX(1);
    transform-origin: left;
    transition: 0.5s transform;
  }

  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
`;
const Menu = () => {
  const dispatch = useDispatch();

  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenu());
  };

  const hidden = useSelector((state) => state.root.menu.hidden);

  return (
    <MenuNav show={!hidden}>
      <Link to="/" onClick={handdlerToggle}>
        Inicio
      </Link>
      <Link to="/gallery" onClick={handdlerToggle}>
        Galeria
      </Link>
      <Link to="/contact" onClick={handdlerToggle}>
        Contacto
      </Link>
      <Link to="/mapa" onClick={handdlerToggle}>
        Como llegar
      </Link>
      <Link to="/login" onClick={handdlerToggle}>
        Login
      </Link>
    </MenuNav>
  );
};

export default Menu;
