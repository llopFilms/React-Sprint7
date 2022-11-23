import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2.5rem;
  height: 100%;
  position: relative;

  > p {
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.5;
  }

  > p:nth-of-type(1) {
    margin-top: 1rem;
  }

  > p:nth-of-type(2) {
    margin-top: 1.5rem;
    font-size: 1.4rem;
  }

  > ul {
    font-size: 1.3rem;
  }

  > ul:nth-of-type(1),
  ul:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    gap: 0.5rem;
    padding-left: 2rem;
  }

  > ul:nth-of-type(3) {
    align-self: center;
    list-style: none;

    position: absolute;
    bottom: 0;

    .link {
      font-weight: bolder;
      color: ${({theme})=>theme.colors.voraError};
    }
  }
`;
