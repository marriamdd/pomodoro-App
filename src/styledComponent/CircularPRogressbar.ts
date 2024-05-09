import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  border-radius: 300px;
  /* background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px 0px #272c5a, 50px 50px 100px 0px #121530; */
`;

export const StyledCircularDiv = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 267.805px;
  height: 267.805px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    width: 366px;
    height: 366px;
    top: 2rem;
    left: 2rem;
  }
`;

export const CircularContainer = styled.div`
  width: 300px;
  height: 300px;

  position: relative;
  border-radius: 300px;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px 0px #272c5a, 50px 50px 100px 0px #121530;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
    border-radius: 410px;
  }
`;
