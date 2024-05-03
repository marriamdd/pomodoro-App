import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
export default function Timer() {
  const options = ["pomodoro ", "short break ", "long break"];
  return (
    <MainCard>
      <div className="pomodoroDiv">
        <h3>pomodoro</h3>
      </div>
      <div className="optionsContainer">
        {options.map((item) => (
          <div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="circleContainer">
        <div style={{ width: "300px", height: "300px" }}>
          <CircularProgressbar
            value={60}
            text={`${60}%`}
            styles={buildStyles({
              textColor: `#D7E0FF`,
              textSize: "35px",
              trailColor: "#161932",
              backgroundColor: "#D881F8",
            })}
          />
        </div>
        <h2>PAUSE</h2>;
      </div>
      <div className="buttonDiv">
        <button>
          <img src="/assets/icon-settings.svg" alt="" />
        </button>
      </div>
    </MainCard>
  );
}

const MainCard = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: space-around; */
  .pomodoroDiv {
    padding: 40px;
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
    & > div {
      width: 105.201px;
      height: 48px;
      border-radius: 26.5px;
      background: #d881f8;

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
    & > h3 {
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
  .buttonDiv {
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
