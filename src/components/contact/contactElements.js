import styled from "styled-components";
import { mobile, tablet } from "../../utils/media/queries";

export const ContactContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("Img/Maquina-background.jpg");
  background-size: cover;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 80%;
  padding: 12px 20px;
  margin: 2% 0;
  background-color: black;
  color: white;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    background-color: #c90a02;
    border: none;
  }
`;

export const FormContainer = styled.div`
  width: 30%;
  height: 75vh;
  padding: 1%;
  margin: 80px auto auto auto;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: -2px 13px 20px 6px rgba(0, 0, 0, 0.75);
  & form {
    height: 80%;
  }

  ${tablet} {
    width: 60%;
    height: 80vh;
    margin-top: 80px;
  }
  ${mobile} {
    width: 90%;
    height: 75vh;
    margin-top: 100px;
    color: white;
    // padding-bottom: 5%;
  }
`;

export const StyledTextarea = styled.textarea`
  min-width: 90%;
  min-height: 30%;
  max-height: 50%;
  margin-top: 2%;
  background-color: #c7c3c3;

  ${tablet} {
    width: 90%;
    min-height: 20%;
    padding-bottom: 5%;
  }
  ${mobile} {
    min-width: 9%;
    // padding-bottom: 5%;
  }
`;