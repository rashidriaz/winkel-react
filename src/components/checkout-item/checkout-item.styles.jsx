import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
      width: 100%;
      height: 100%;
 `;
export const ItemName = styled.span`
width: 23%;
`;
export const ItemQuantityContainer = styled.span`
width: 23%;
display: flex
`;
export const ItemPrice = styled.span`
width: 23%;
`;

export const ArrowButton = styled.span`
      cursor: pointer;
    `;


export const ItemQuantity = styled.span`
    margin:  0 10px;
`;

export const RemoveButton = styled.button`
    padding - left:12px;
    cursor: pointer;
`;
