import styled from "styled-components";

export const ColorContainer = styled.div`
  padding-block: 1rem;
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: none;
    }
  }
  .activeColor {
    img {
      display: flex;
    }
  }
`;
