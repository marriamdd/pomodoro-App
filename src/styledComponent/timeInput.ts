import styled from "styled-components";

export const TimeInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  & > h2 {
    color: #1e213f;

    font-size: 12px;

    font-weight: 700;

    opacity: 0.4;
  }
  input {
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
