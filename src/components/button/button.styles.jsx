import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }

`;

export const GoogleSignInButton = styled(InvertedButton)`
    background-color: #164594;
    color: white;
    &:hover {
      background-color: #093479;
      border: none;
    }
  `;

export const ButtonImage = styled.img`
    height: 30px;
    width: 30px;
    margin: auto 5px auto 0;
`;
