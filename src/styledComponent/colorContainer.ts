import styled from "styled-components";

export const ColorSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin: 4rem 1rem 0rem;
    padding-inline: 4rem;
    h2 {
      padding: 0;
    }
  }

  .colorsDivsContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      padding: 0;
      margin: 0;
      justify-content: end;
    }

    div {
      cursor: pointer;
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
  }
`;

// export const ColorContainer = styled.div`
//   padding-block: 1rem;
//   margin-bottom: 1rem;
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   gap: 2rem;
//   @media screen and (min-width: 768px) {
//     /* flex-direction: column; */
//   }
//   div {
//     cursor: pointer;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     img {
//       display: none;
//     }
//   }

//   .activeColor {
//     img {
//       display: flex;
//     }
//   }
// `;
