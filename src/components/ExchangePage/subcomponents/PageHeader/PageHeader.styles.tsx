import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  color: white;
  background-color: blue;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 1px solid white;
  padding: 0.5rem;
  width: fit-content;

  & > img {
    width: 3rem;
    hieght: 3rem;
    filter: invert(100%);
  }
`;
