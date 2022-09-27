import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../utils/media/queries";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url("Img/Maquina-background.jpg");
  background-size: cover;
  background: linear-gradient(
    0deg,
    rgba(13, 13, 13, 1) 1%,
    rgba(13, 13, 13, 1) 7%,
    rgba(255, 255, 255, 0) 100%
  );
  ${mobile} {
    background-image: url("Img/Maquina-background.jpg");
    background-size: cover;
  }
`;
const Text = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  & p {
    color: white;
    font-size: 1rem;
    font-family: "Segoe UI";
    text-transform: uppercase;
    font-weight: 200;
  }
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: grayscale(100%);
  z-index: -1;
  ${tablet} {
    object-fit: scale-down;
  }
  ${mobile} {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Video autoPlay muted loop>
        <source src="Img/video.mp4" type="video/mp4"></source>
      </Video>
      <Text>
        <p>Tatuajes Artisticos</p>
        <p>Vedia - Buenos Aires - Argentina</p>
      </Text>
    </HeroContainer>
  );
};

export default Hero;
