import styled from "styled-components";
import { TimeInputDiv } from "../styledComponent/timeInput";
import { FontChoice } from "../styledComponent/fontChoice";
import { ColorContainer } from "../styledComponent/colorContainer";
export default function Settings() {
  return (
    <SettingsContainer>
      <div className="SettingTitle">
        <h2>Settings</h2>
        <span>
          <img src="/assets/icon-close.svg" alt="" />
        </span>
      </div>
      <h2>TIME (MINSTES)</h2>
      <div style={{ borderBottom: "1px solid #E3E1E1 ", padding: "1rem" }}>
        <TimeInputDiv>
          <span>pomodoro</span>
          <input type="number" min="0" />
        </TimeInputDiv>
        <TimeInputDiv>
          <span>short break</span>
          <input type="number" />
        </TimeInputDiv>
        <TimeInputDiv>
          <span>long break</span>
          <input type="number" />
        </TimeInputDiv>
      </div>
      <h2>FONT</h2>
      <FontChoice>
        <div style={{ fontFamily: "Kumbh Sans" }}>
          <span>Aa</span>
        </div>
        <div style={{ fontFamily: "Roboto Slab" }}>
          <span>Aa</span>
        </div>
        <div style={{ fontFamily: "Space Mono" }}>
          <span>Aa</span>
        </div>
      </FontChoice>
      <h2>COLOR</h2>
      <ColorContainer>
        <div style={{ background: "#F87070" }}></div>
        <div style={{ background: "#70F3F8" }}></div>
        <div style={{ background: "#D881F8" }}></div>
      </ColorContainer>
      <div className="buttonDiv">
        <button>Apply</button>
      </div>
    </SettingsContainer>
  );
}
const SettingsContainer = styled.div`
  position: absolute;
  top: 5.5rem;
  width: 327px;
  height: 549px;
  border-radius: 15px;
  background: #fff;
  .buttonDiv {
    position: relative;
    & > button {
      position: absolute;

      right: 9rem;
      width: 140px;
      height: 53px;
      border-radius: 26.5px;
      background: #f87070;
      color: #fff;
      text-align: center;
      font-family: "Kumbh Sans";
      font-size: 16px;
      border: none;
      font-weight: 700;
    }
  }

  & > h2 {
    color: #161932;
    text-align: center;
    padding-top: 1.5rem;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 4.231px;
  }
  .SettingTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 2px solid #e3e1e1;
    h2 {
      color: #161932;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
