import React from "react";
import styled from "styled-components";

const DialogBanner = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #000000c8;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  &* {
    z-index: 5;
  }
`;
const DialogImg = styled.div`
  margin: auto;

  & img {
    width: 80%;
    height: auto;
    border: 1px solid white;
    border-radius: 20px;
  }
`;

const DialogContainer = ({ openImage, setOpenImage }) => {
  const handlerClose = () => {
    setOpenImage();
  };
  return (
    <DialogBanner onClick={handlerClose}>
      <DialogImg>
        <img src={openImage.img} alt="" />
      </DialogImg>
    </DialogBanner>
  );
};

export const Dialog = (props) => {
  if (!props.openImage) return null;
  return <DialogContainer {...props} />;
};
