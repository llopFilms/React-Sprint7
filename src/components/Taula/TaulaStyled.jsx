import styled from "styled-components";
import { Button } from "../common/Boto/BotoStyled";

export const ContainerTaula = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row nowrap;
  justify-content: start;
  align-items: start !important;
  gap: 2rem;
`;

export const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2rem;

  > h2 {
    font-size: 1.5rem;
  }

  > div {
    padding-left: 1rem;
    height: 49rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1.5rem;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      > label {
        font-size: 1.3rem;
        font-weight: 500;
      }

      > input {
        width: 17rem;
        padding: 0.5rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.vores};
        border-radius: 1rem;
      }
    }
    > div:nth-of-type(2) {
      margin-bottom: 1rem;
    }

    > hr {
      width: 100%;
    }

    > label {
      font-size: 1.3rem;
      font-weight: 500;

      > input {
        margin-right: 1rem;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .total {
      position: absolute;
      bottom: 0;
      padding: 0 0.8rem 1rem 0;

      > p {
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
`;

export const BotoRegistre = styled(Button)`
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
`;

export const Container2 = styled.div`
  width: 35rem;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;

  > div:nth-of-type(1) {
    margin-top: .6rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > label {
      font-size: 1rem;
      font-weight: 500;
    }

    > input {
      width: 28rem;
      padding: 0.25rem .75rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.vores};
      border-radius: 1rem;
    }
  }
`;

export const BotoCalcul = styled(Button)`
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;
