import styled from "styled-components";
import { useContext } from "react";
import { TimeInputDiv } from "../styledComponent/timeInput";
import { FontSection } from "../styledComponent/fontChoice";
import { ColorSection } from "../styledComponent/colorContainer";
import { TimerContext } from "../App";
import { SectionTitle } from "../styledComponent/SectionTitles";
export default function Settings() {
  const {
    setShowSettings,
    showSettings,
    setLongBreak,

    setPomodoro,
    setShortBreak,
    shortbreak,
    longbreak,
    pomodoro,

    colorsArray,
    color,
    setColor,
    fontsArray,
    setFont,
    font,
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
      <SectionTitle>TIME (MINSTES)</SectionTitle>
      <TimeInputsContainer>
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
      </TimeInputsContainer>
      <Line></Line>
      <FontSection>
        <SectionTitle>FONT</SectionTitle>
        <div className="fontsDivsContainer">
          {fontsArray.map((fontFam, index) => (
            <div
              onClick={() => setFont(fontFam)}
              className={fontFam == font ? "activeFont" : ""}
              key={Math.random()}
            >
              <span
                style={{
                  fontFamily: fontFam,
                  fontWeight: index == 1 ? "400" : "700",
                }}
              >
                Aa
              </span>
            </div>
          ))}
        </div>
      </FontSection>
      <Line></Line>
      <ColorSection>
        <SectionTitle>COLOR</SectionTitle>
        <div className="colorsDivsContainer">
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
        </div>
      </ColorSection>
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
  width: 32.7rem;
  height: 56rem;
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3rem;
  @media screen and (min-width: 768px) {
    top: 6rem;
    width: 54rem;
    height: 55rem;
    margin-inline: -6rem;
    padding-bottom: 0rem;
  }
  .buttonDiv {
    width: 100%;

    & > button {
      position: absolute;
      bottom: -3rem;
      right: 9rem;
      width: 140px;
      height: 53px;
      border-radius: 26.5px;
      background: #f87070;
      color: #fff;
      text-align: center;

      font-size: 16px;
      border: none;
      font-weight: 700;
      @media screen and (min-width: 768px) {
        left: 19rem;
        button: 3rem;
      }
    }
    & > button:hover {
      opacity: 0.9;
    }
  }

  .SettingTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1.5px solid #e3e1e1;
    @media screen and (min-width: 768px) {
      padding-top: 0;
      margin-top: -7rem;
      padding-bottom: 4rem;
    }
    h2 {
      color: #161932;
      font-size: 2rem;
      font-weight: 700;
      @media screen and (min-width: 768px) {
        font-size: 2.8rem;
      }
    }
  }
`;
const Line = styled.div`
  width: 90%;
  min-height: 1px;
  background: #e3e1e1;
  align-self: center;
`;
const TimeInputsContainer = styled.div`
  padding: 1rem;
  margin: 2.5rem 1rem 1rem;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
