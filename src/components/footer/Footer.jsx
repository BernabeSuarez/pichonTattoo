import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const H5 = styled.h5`
  color: white;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <H5>Desarrollado por Pichon - 2022</H5>
      <H5>Vedia - Buenos Aires</H5>
    </FooterContainer>
  );
};

export default Footer;
