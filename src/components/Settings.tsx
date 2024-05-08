import styled from "styled-components";
import { useContext } from "react";
import { TimeInputDiv } from "../styledComponent/timeInput";
import { FontChoice } from "../styledComponent/fontChoice";
import { ColorContainer } from "../styledComponent/colorContainer";
import { TimerContext } from "../App";
export default function Settings() {
  const {
    setShowSettings,
    showSettings,
    setLongBreak,
    setPause,
    setPomodoro,
    setShortBreak,
    shortbreak,
    longbreak,
    pomodoro,
    pause,
    category,
    setCategory,
    colorsArray,
    color,
    setColor,
    fontsArray,
  } = useContext(TimerContext);
  console.log("color", color);
  return (
    <SettingsContainer>
      <div className="SettingTitle">
        <h2>Settings</h2>
        <span
          onClick={() => {
            setShowSettings(!showSettings);
          }}
        >
          <img src="/assets/icon-close.svg" alt="" />
        </span>
      </div>
      <h2>TIME (MINSTES)</h2>
      <div style={{ borderBottom: "1px solid #E3E1E1 ", padding: "1rem" }}>
        <TimeInputDiv>
          <span>pomodoro</span>
          <input
            type="number"
            min="0"
            max="60"
            value={pomodoro}
            onChange={(e) => {
              setPomodoro(+e.target.value);
            }}
          />
        </TimeInputDiv>
        <TimeInputDiv>
          <span>short break</span>
          <input
            type="number"
            min="0"
            max="60"
            value={shortbreak}
            onChange={(e) => {
              setShortBreak(+e.target.value);
            }}
          />
        </TimeInputDiv>
        <TimeInputDiv>
          <span>long break</span>
          <input
            type="number"
            min="0"
            max="60"
            value={longbreak}
            onChange={(e) => {
              setLongBreak(+e.target.value);
            }}
          />
        </TimeInputDiv>
      </div>
      <h2>FONT</h2>
      <FontChoice>
        {fontsArray.map((font, index) => (
          <div key={Math.random()}>
            <span
              style={{
                fontFamily: font,
                fontWeight: index == 1 ? "400" : "700",
              }}
            >
              Aa
            </span>
          </div>
        ))}
      </FontChoice>
      <h2>COLOR</h2>
      <ColorContainer>
        {colorsArray.map((itemColor) => (
          <div
            key={Math.random()}
            onClick={() => setColor(itemColor)}
            style={{ background: itemColor }}
            className={itemColor === color ? "activeColor" : ""}
          >
            <img src="/assets/icon.svg" alt="" />
          </div>
        ))}
      </ColorContainer>
      <div className="buttonDiv">
        <button
          onClick={() => {
            setShowSettings(!showSettings);
          }}
        >
          Apply
        </button>
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
    & > button:hover {
      opacity: 0.9;
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
