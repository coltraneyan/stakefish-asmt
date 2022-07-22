import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 5rem;
  padding: 1rem;
  color: white;
  gap: 0.5rem;
  background-color: blue;
  z-index: 1;

  & > img {
    width: 3rem;
    hieght: 3rem;
    filter: invert(100%);
  }
`;

export const Title = styled.div`
  font-size: 120%;
  font-weight: bold;
`;
