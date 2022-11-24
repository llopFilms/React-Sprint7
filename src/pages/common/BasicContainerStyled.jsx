import styled from "styled-components";

export const Container = styled.div`
  height: 60rem;
  width: 75rem;
  margin: 5rem auto;
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.fonsContenidor};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.vores};
  border-radius: 2rem;

  > h1, > h2 {
    width: 95%;
    text-align: center;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.vores};
  }

  > div {
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: start;
    position: relative;
  }
`;
