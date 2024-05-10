import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { buildStyles } from "react-circular-progressbar";
import {
  CircularContainer,
  StyledCircularDiv,
  StyledCircularProgressbar,
} from "../styledComponent/CircularPRogressbar";

export default function LongBreakComponent() {
  const {
    setPause,

    longbreak,
    pause,
    setCondition,
    condition,
    longSecondsLeft,
    setLongSecondsLeft,
    longSecondRef,
    color,
    font,
  } = useContext(TimerContext);
  const longBreakRef = useRef(longbreak);

  const initTimer = () => {
    setLongSecondsLeft(longbreak * 60);
    const nextSeconds = longbreak * 60;
    longSecondRef.current = nextSeconds;
  };

  const tick = () => {
    longSecondRef.current--;
    setLongSecondsLeft(longSecondRef.current);
  };

  useEffect(() => {
    if (+longBreakRef.current !== +longbreak) {
      initTimer();
    }
  }, [longbreak]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      } else if (!pause) {
        setCondition("PAUSE");
      }

      tick();
    }, 1000);

    if (longSecondRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [longbreak, pause, longSecondRef.current]);

  useEffect(() => {
    if (pause && condition !== "START") {
      setCondition("CONTINUE");
    }
  }, [pause]);
  const totalSeconds = longbreak * 60;
  const percentage = Math.round((longSecondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(longSecondsLeft / 60);
  const seconds = longSecondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const customStyle = {
    text: {
      fontFamily: font,
    },
  };
  useEffect(() => {
    if (longSecondRef.current == 0) {
      setCondition("START");
      initTimer();
      setPause(true);
    }
  }, [longSecondRef.current]);

  return (
    <CircularContainer>
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
    </CircularContainer>
  );
}
