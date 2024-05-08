import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  border-radius: 300px;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px 0px #272c5a, 50px 50px 100px 0px #121530;
`;

export const StyledCircularDiv = styled.div`
  width: 32rem;
  height: 30rem;
  @media screen and (min-width: 768px) {
    width: 41rem;
    height: 41rem;
    flex-shrink: 0;
  }
`;
