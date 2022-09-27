import styled from 'styled-components';
import { mobile } from '../../utils/media/queries'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  background-color: #f4f4f4;
  border-radius: 15px;
  font-size: 16px;
  color: #7d7d7d;
  padding: 4px 0;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  &:focus {
    background-color: #ffffff;
    outline-width: 0;
  }

  ${({ showError }) =>
    showError
      ? `
          border-color: red;
          background: #ffd1d1;
        `
      : null}
`;



export const Input = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 2%;
  display: inline-block;
  background-color: #c7c3c3;
  border-radius: 6px;
 
  &:focus {
    border: none;
    outline: none;     
  }

${mobile} {
    width: 80%;

  }
  ${(
  { showError } //Colorea el input si existe un error
) =>
    showError
      ? `
          border: 3px solid  darkred;
          background: #ffd1d1;
        `
      : null}
`;

export const ErrorContainer = styled.div`
color: darkred;
font-size: 1rem;
font-style: italic;
`