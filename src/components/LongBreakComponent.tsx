import React, { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { StyledCircularProgressbar } from "../styledComponent/CircularPRogressbar";

export default function LongBreakComponent() {
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
    secondsLeft,
    setSecondsLeft,
    color,
  } = useContext(TimerContext);

  let longRef = useRef(longbreak);
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (pause) {
        return;
      }
      if (longRef.current > 0) {
        setLongBreak((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [longRef.current, pause]);
  return (
    <div>
      <div
        onClick={() => setPause(!pause)}
        style={{ width: "320px", height: "300px" }}
      >
        <StyledCircularProgressbar
          value={60}
          text={`${longbreak}`}
          background
          backgroundPadding={2}
          className="custom-progress-bar"
          styles={buildStyles({
            textColor: `#D7E0FF`,
            textSize: "32px",
            trailColor: "#161932",
            backgroundColor: "#161932",
            pathColor: color,
          })}
        />
      </div>
    </div>
  );
}
