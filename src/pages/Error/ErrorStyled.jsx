import styled from "styled-components";
import { Button } from "../../components/common/Boto/BotoStyled";

export const Img = styled.img`
  background-color: ${({theme}) => theme.colors.fonsModal};
  display: block;
  padding: 2rem;
  border: 1rem solid${({theme})=>theme.colors.voraError};
  border-radius: 50%;
`;

export const BotoCalcul = styled(Button)`
  width: auto;
  height: auto;
  align-self: center;
  padding: 0.5rem 1rem;
  position: relative;
`;
