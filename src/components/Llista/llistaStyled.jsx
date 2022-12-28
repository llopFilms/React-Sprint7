import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 39rem;
  display: flex;
  justify-content: start;
  align-items: start;
  border: 0.2rem solid ${({ theme }) => theme.colors.vores};
  border-radius: 1.5rem;
  overflow: auto;
`;
