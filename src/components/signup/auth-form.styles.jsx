import styled from "styled-components";
import {BaseButton} from "../button/button.styles";
import {Link} from "react-router-dom";

export const AuthFormContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const AuthFormHeading = styled.h2`
    margin: 10px 0;
    text-align: center;
  `;
export const CenteredButton = styled(BaseButton)`
    margin: 10px auto;
   width: auto;
`;

export const UnderlinedLink = styled(Link)`
  &:hover{
  text-decoration: underline;
  }
`;



