import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 7rem;
  width: 40vw;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const Volume = styled.div`
  color: #11b76a;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;

  & > a {
    color: blue;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: bold;
`;
export const TitleWrapper = styled.div`
  border-bottom: 1px solid blue;
  margin-bottom: 1.5rem;
  width: 100%;
  font-size: 150%;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  & img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 0.2rem;
  }
`;
