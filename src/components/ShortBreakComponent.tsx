import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../App";
import { buildStyles } from "react-circular-progressbar";
import {
  CircularContainer,
  StyledCircularDiv,
  StyledCircularProgressbar,
} from "../styledComponent/CircularPRogressbar";

export default function ShortBreakComponent() {
  const {
    setPause,

    shortbreak,
    pause,
    shortSecondsLeft,
    shortSecondsLeftRef,
    setShortSecondsLeft,
    condition,
    setCondition,
    color,
    font,
  } = useContext(TimerContext);
  const shortBreakRef = useRef(shortbreak);

  const initTimer = () => {
    setShortSecondsLeft(shortbreak * 60);
    const nextSeconds = shortbreak * 60;
    shortSecondsLeftRef.current = nextSeconds;
  };

  const tick = () => {
    shortSecondsLeftRef.current--;
    setShortSecondsLeft(shortSecondsLeftRef.current);
  };

  useEffect(() => {
    if (+shortBreakRef.current !== +shortbreak) {
      initTimer();
    }
  }, [shortbreak]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      } else if (!pause) {
        setCondition("PAUSE");
      }

      tick();
    }, 1000);

    if (shortSecondsLeftRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [shortbreak, pause, shortSecondsLeftRef.current]);

  useEffect(() => {
    if (pause && condition !== "START") {
      setCondition("CONTINUE");
    }
  }, [pause]);

  const totalSeconds = shortbreak * 60;
  const percentage = Math.round((shortSecondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(shortSecondsLeft / 60);
  const seconds = shortSecondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const customStyle = {
    text: {
      fontFamily: font,
    },
  };
  useEffect(() => {
    if (shortSecondsLeftRef.current == 0) {
      setCondition("START");

      initTimer();

      setPause(true);
    }
  }, [shortSecondsLeftRef.current]);
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
