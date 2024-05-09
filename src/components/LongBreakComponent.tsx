import { useContext, useEffect } from "react";
import { TimerContext } from "../App";
import { buildStyles } from "react-circular-progressbar";
import {
  StyledCircularDiv,
  StyledCircularProgressbar,
} from "../styledComponent/CircularPRogressbar";

export default function LongBreakComponent() {
  const {
    setPause,

    longbreak,
    pause,

    secondsLeft,
    setSecondsLeft,
    secondRef,
    color,
    font,
  } = useContext(TimerContext);

  const initTimer = () => {
    setSecondsLeft(longbreak * 60);
    const nextSeconds = longbreak * 60;
    secondRef.current = nextSeconds;
  };

  const tick = () => {
    secondRef.current--;
    setSecondsLeft(secondRef.current);
  };

  useEffect(() => {
    initTimer();
  }, [longbreak]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      }

      tick();
    }, 1000);

    if (secondRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [longbreak, pause]);

  const totalSeconds = longbreak * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const customStyle = {
    text: {
      fontFamily: font,
    },
  };

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
