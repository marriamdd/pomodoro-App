// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useContext } from "react";
import { TimerContext } from "../App";
import PomodoroComponent from "./PomodoroComponent";
import LongBreakComponent from "./LongBreakComponent";
import ShortBreakComponent from "./ShortBreakComponent";

export default function Timer() {
  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };
  const {
    setShowSettings,
    showSettings,
    secondRef,
    category,
    setCategory,
    pause,
    color,
  } = useContext(TimerContext);
  const options = ["pomodoro", "short break", "long break"];
  console.log(secondRef);
  return (
    <MainCard color={color}>
      <div className="pomodoroDiv">
        <h2 className="appTitle">pomodoro</h2>
      </div>
      <div className="optionsContainer">
        {options.map((item) => (
          <div
            key={Math.random()}
            onClick={() => {
              setCategory(`${item}`);
            }}
            className={category === item ? "active" : ""}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="circleContainer">
        {category == "long break" && <LongBreakComponent />}
        {category == "short break" && <ShortBreakComponent />}
        {category == "pomodoro" && <PomodoroComponent />}
        {category == undefined && <PomodoroComponent />}
        {pause ? <h2>START</h2> : <h2>PAUSE</h2>};
      </div>
      <div className="buttonDiv">
        {showSettings || (
          <button onClick={handleSettingsClick}>
            <img src="/assets/icon-settings.svg" alt="" />
          </button>
        )}
      </div>
    </MainCard>
  );
}

const MainCard = styled.div<{ color: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .active {
    background-color: ${(props) => props.color};
    color: #1e213f;
  }
  .pomodoroDiv {
    padding: 35px;
    color: #d7e0ff;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  .optionsContainer {
    width: 327px;
    height: 63px;
    display: flex;
    border-radius: 31.5px;
    background: #161932;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;
    color: #d7e0ff;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    & > div {
      width: 103px;
      height: 48px;
      border-radius: 26.5px;

      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > span {
      color: #1e213f;
      font-family: "Space Mono";
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .circleContainer {
    position: relative;
    margin-block: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & > h2 {
      position: absolute;
      bottom: 9rem;
      color: #d7e0ff;

      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 13.125px;
    }
  }
  .appTitle {
    font-size: 24px;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
  }
  .buttonDiv {
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
  }
`;
