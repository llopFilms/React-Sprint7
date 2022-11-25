import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.fonsOverlay};
`;

export const Container = styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.fonsModal};
  border: 0.5rem solid ${({ theme }) => theme.colors.fonsInfo};
  border-radius: 1.5rem;
  text-align: left;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    > h3 {
      align-self: center;
      font-size: 1.5rem;
    }
  }

  > p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  > ul {
    font-size: 1rem;
    padding-left: 2rem;
    font-weight: normal;

    > li {
      margin: 0.3rem 0;

      > span {
        font-weight: bold;
        margin: 0.2rem;
      }
    }
  }
`;
