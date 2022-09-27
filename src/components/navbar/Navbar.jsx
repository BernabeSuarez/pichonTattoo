import React from "react";
import {
  NavbarContainer,
  MenuIconOpen,
  MenuIconClose,
  Logo,
  MenuContainer,
} from "./navbarStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menu-actions";

const Navbar = () => {
  const hidden = useSelector((state) => state.root.menu.hidden);
  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenu());
  };
  return (
    <NavbarContainer>
      {hidden && <MenuIconOpen onClick={handdlerToggle} />}
      {!hidden && <MenuIconClose onClick={handdlerToggle} />}

      <Link to="/">
        <Logo>
          <span>PICHON TATTOO</span>
        </Logo>
      </Link>

      <MenuContainer>
        <Link to="/">Inicio</Link>
        <Link to="/gallery">Galeria</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/mapa">Como llegar</Link>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
