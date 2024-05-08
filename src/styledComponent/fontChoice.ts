import styled from "styled-components";

export const FontSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    justify-content: center;
    align-items: center;
    margin: 3rem 1rem 1rem;
    padding-inline: 4rem;
    h2 {
      padding: 0;
      padding-bottom: 3rem;
    }
  }
  .fontsDivsContainer {
    padding-bottom: 3rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .activeFont {
      background-color: #1e213f;
      color: white;
    }
    @media screen and (min-width: 768px) {
      justify-content: end;
    }
    div {
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 15px;
      background-color: #eff1fa;
      color: #1e213f;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
