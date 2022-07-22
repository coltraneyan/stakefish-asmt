import styled from "styled-components";

export const Name = styled.div``;

export const Logo = styled.div`
  border-radius: 20rem;
  overflow: hidden;
  width: 1.5rem;
  height: 1.5rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Label = styled.div`
  font-size: 75%;
  font-weight: bold;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.div`
  color: grey;
`;

export const Volume = styled.div`
  color: #11b76a;
  font-size: 90%;
  font-weight: bold;
  margin-left: auto;
`;

export const URL = styled.div`
  color: grey;
  font-size: 90%;
  margin-left: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 40vw;
  border-radius: 25rem;
  border: 2px solid whitesmoke;
  transition: 0.2s ease-in;

  &:hover {
    border: 2px solid blue;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 5rem;
  }
`;
