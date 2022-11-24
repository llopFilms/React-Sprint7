import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid ${({ theme }) => theme.colors.vores};
  border-radius: 1.5rem;
  padding: 1rem;

  > div {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;

    > label {
      font-size: 1.2rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      > input {
        width: 7rem;
        padding: 0.4rem 0.3rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.vores};
        border-radius: 1rem;
      }
    }
  }
`;
