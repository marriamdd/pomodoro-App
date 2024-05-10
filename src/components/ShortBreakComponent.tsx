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
    setNamedPause,
    shortbreak,

    shortSecondsLeft,
    shortSecondsLeftRef,
    setShortSecondsLeft,
    condition,
    setCondition,
    color,
    font,
    namedPause,
    category,
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
  }, [shortbreak, category]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (namedPause == "pause short break") {
        return;
      } else if (namedPause == "short break") {
        setCondition("PAUSE");
      }

      tick();
    }, 1000);

    if (shortSecondsLeftRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [shortbreak, namedPause, shortSecondsLeftRef.current, category]);

  useEffect(() => {
    if (namedPause == "pause short break" && condition !== "START") {
      setCondition("CONTINUE");
    }
  }, [namedPause, category]);

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
    if (shortSecondsLeftRef.current == 0 && namedPause == "pause short break") {
      setCondition("START");

      initTimer();
    }

    if (shortSecondsLeftRef.current == shortbreak * 60) {
      setCondition("START");
    } else if (namedPause == "pause short break") {
      setCondition("CONTINUE");
    } else if (namedPause == category) {
      setCondition("PAUSE");
    }
  });

  useEffect(() => {
    setNamedPause("pause short");
  }, []);

  useEffect(() => {
    setNamedPause("pause short break");
  }, []);

  return (
    <CircularContainer>
      <StyledCircularDiv
        onClick={() =>
          setNamedPause((prev) =>
            prev == "short break" ? "pause short break" : `${category}`
          )
        }
      >
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
