import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  StyledCircularDiv,
  StyledCircularProgressbar,
} from "../styledComponent/CircularPRogressbar";

export default function PomodoroComponent() {
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
    secondRef,
    color,
    font,
  } = useContext(TimerContext);

  let pomoRef = useRef(pomodoro);
  let pauseRef = useRef(pause);

  let initTimer = () => {
    setSecondsLeft(pomodoro * 60);
    const nextSeconds = pomodoro * 60;
    secondRef.current = nextSeconds;
  };

  const tick = () => {
    secondRef.current--;
    setSecondsLeft(secondRef.current);
  };

  useEffect(() => {
    initTimer();
  }, []);

  useEffect(() => {
    // const nextSeconds = pomodoro * 60;
    // secondRef.current = nextSeconds;

    const interval = setInterval(() => {
      if (pause) {
        return;
      }

      // initTimer();
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [pomodoro, pause]);

  const totalSeconds = pomodoro * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let customStyle = {
    text: {
      fontFamily: font,
    },
  };
  console.log("font now", font);
  return (
    <div>
      <StyledCircularDiv onClick={() => setPause(!pause)}>
        <StyledCircularProgressbar
          value={percentage}
          text={minutes + ":" + secondsDisplay}
          background
          backgroundPadding={2}
          className="custom-progress-bar"
          styles={buildStyles({
            textColor: `#D7E0FF`,
            textSize: "32px",
            trailColor: "#161932",
            pathColor: color,
            backgroundColor: "#161932",
            ...customStyle,
          })}
        />
      </StyledCircularDiv>
    </div>
  );
}
