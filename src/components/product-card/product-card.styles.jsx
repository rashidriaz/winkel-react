import styled from "styled-components";
import {Button} from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  box-shadow: 5px 10px 18px #888888;
  &:hover {
    box-shadow: 5px 10px 8px #888888;
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
    }
  `;
export const ProductImage = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  `;

export const AddToCartButton = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;
export const ProductCardFooter = styled.span`
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: large;
    background-color: #3b434f;
    color: white;
    border-radius: 0 0 5px 5px;
`;

export const ProductName = styled.span`
      font-weight: bold;
      font-style: italic;
      width: 80%;
`;
export const ProductPrice = styled.span`
      font-weight: bold;
      width: 20%;
    `;
