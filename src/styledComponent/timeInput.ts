import styled from "styled-components";

export const TimeInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: start;
  }
  & > span {
    font-size: 12px;
    font-weight: 700;
    opacity: 0.4;
    color: #1e213f;
  }
  input {
    box-sizing: border-box;
    padding: 1.5rem;
    width: 140px;
    height: 40px;
    border-radius: 10px;
    background: #eff1fa;
    color: #1e213f;
    font-size: 14px;
    font-weight: 700;
    border: none;
  }
`;
