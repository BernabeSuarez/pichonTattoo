import React from "react";
import styled from "styled-components";
import { dataGallery } from "../../data/dataGallery";
import { ImageList, ImageListItem } from "@mui/material";

const GalleryContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("Img/Maquina-background.jpg");
  background-size: cover;
  overflow: hidden;
`;
const Images = styled(ImageList)`
  width: 90%;
  margin: auto;
  box-shadow: 0px 13px 19px 7px rgba(0, 0, 0, 0.75); ;
`;
const Imagenes = styled(ImageListItem)`
  filter: contrast(85%) grayscale(65%);
  transition: 0.8s;

  &:hover {
    filter: contrast(100%) grayscale(0%);
    overflow: hidden;
    & img {
      transition: 0.5s;
      transform: scale(1.2) rotate(5deg);
    }
  }
`;

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = ({ setOpenImage }) => {
  return (
    <GalleryContainer>
      <Images variant="quilted" cols={4} rowHeight={121} gap={12}>
        {dataGallery.map((item) => (
          <Imagenes key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setOpenImage(item);
              }}
            />
          </Imagenes>
        ))}
      </Images>
    </GalleryContainer>
  );
};

export default Gallery;
