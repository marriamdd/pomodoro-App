import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { buildStyles } from "react-circular-progressbar";
import {
  CircularContainer,
  StyledCircularDiv,
  StyledCircularProgressbar,
} from "../styledComponent/CircularPRogressbar";

export default function PomodoroComponent() {
  const {
    setPause,
    setCondition,
    pomodoro,
    pause,
    condition,
    pomodoSecondsLeft,
    setPomodoSecondsLeft,
    pomoSecondRef,
    color,
    font,
  } = useContext(TimerContext);
  const pomodoroRef = useRef(pomodoro);
  const initTimer = () => {
    setPomodoSecondsLeft(pomodoro * 60);
    const nextSeconds = pomodoro * 60;
    pomoSecondRef.current = nextSeconds;
  };

  const tick = () => {
    pomoSecondRef.current--;
    setPomodoSecondsLeft(pomoSecondRef.current);
  };

  useEffect(() => {
    if (+pomodoroRef.current !== +pomodoro) {
      initTimer();
    }
  }, [pomodoro]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      } else if (!pause) {
        setCondition("PAUSE");
      }

      tick();
    }, 1000);

    if (pomoSecondRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [pomodoro, pause, pomoSecondRef.current]);

  useEffect(() => {
    if (pause && condition !== "START") {
      setCondition("CONTINUE");
    }
  }, [pause]);

  const totalSeconds = pomodoro * 60;
  const percentage = Math.round((pomodoSecondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(pomodoSecondsLeft / 60);
  const seconds = pomodoSecondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const customStyle = {
    text: {
      fontFamily: font,
    },
  };
  useEffect(() => {
    if (pomoSecondRef.current == 0) {
      setCondition("START");
      initTimer();
      setPause(true);
    }
  }, [pomoSecondRef.current]);

  return (
    <CircularContainer>
      <StyledCircularDiv onClick={() => setPause(!pause)}>
        <StyledCircularProgressbar
          value={percentage}
          text={minutes + ":" + secondsDisplay}
          background
          backgroundPadding={3}
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
    </CircularContainer>
  );
}
