import React, { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { StyledCircularProgressbar } from "../styledComponent/CircularPRogressbar";

export default function ShortBreakComponent() {
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

  let shortRef = useRef(shortbreak);
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (pause) {
        return;
      }
      if (shortRef.current > 0) {
        setShortBreak((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [shortRef.current, pause]);
  return (
    <div>
      <div
        onClick={() => setPause(!pause)}
        style={{ width: "300px", height: "300px" }}
      >
        <StyledCircularProgressbar
          value={60}
          background
          backgroundPadding={2}
          text={`${shortbreak}`}
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
