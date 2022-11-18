import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid #444;
  border-radius: 1.5rem;
  padding: 1rem;

  > div {
    width: 100%;
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
      gap: 0.5rem;

      > input {
        width: 7rem;
        padding: 0.2rem 0.3rem;
        border: 0.1rem solid #444;
        border-radius: 1rem;
      }

      > button {
        width: 2.1rem;
        height: 2.1rem;
        padding-bottom: 0.2rem;
        border: 0.1rem solid #444;
        border-radius: 2rem;
        background-color: #fd9268;
        font-weight: bold;
      }
    }
  }
`;
