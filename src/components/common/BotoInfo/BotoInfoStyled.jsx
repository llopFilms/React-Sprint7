import styled from "styled-components";

export const Icona = styled.i`
  display: flex;
  margin-left: .5rem;
  font-size: 2rem;
  color: ${({theme})=>theme.colors.fonsModal};
  background-color: ${({theme})=>theme.colors.fonsInfo};
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
