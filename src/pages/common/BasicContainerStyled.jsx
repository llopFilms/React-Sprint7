import styled from "styled-components";

export const Container = styled.div`
  height: 60rem;
  max-width: 60rem;
  margin: 10rem auto;
  padding: 3rem 2rem;
  background-color: #daf7a6;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  border: 0.2rem solid #444;
  border-radius: 2rem;

  > h1 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid #444;
  }

  > h2 {
    width: 90%;
    text-align: center;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid #444;
  }

  > div {
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: start;
    position: relative;
  }
`;
