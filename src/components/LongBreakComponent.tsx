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
    category,
    longbreak,

    setCondition,
    condition,
    longSecondsLeft,
    setLongSecondsLeft,
    longSecondRef,
    color,
    font,
    namedPause,
    setNamedPause,
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
  }, [longbreak, category]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (namedPause == "pause long break") {
        return;
      } else if (namedPause == "long break") {
        setCondition("PAUSE");
      }

      tick();
    }, 1000);

    if (longSecondRef.current == 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [longbreak, namedPause, longSecondRef.current, category]);

  useEffect(() => {
    if (namedPause == "pause long break" && condition !== "START") {
      setCondition("CONTINUE");
    }
  }, [namedPause, category]);
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
    if (longSecondRef.current == 0 && namedPause == "pause long break") {
      setCondition("START");
      initTimer();
    }
    if (longSecondRef.current == longbreak * 60) {
      setCondition("START");
    } else if (namedPause == "pause long break") {
      setCondition("CONTINUE");
    } else if (namedPause == category) {
      setCondition("PAUSE");
    }
  });
  useEffect(() => {
    setNamedPause("pause long break");
  }, []);

  return (
    <CircularContainer>
      <StyledCircularDiv
        onClick={() =>
          setNamedPause((prev) =>
            prev == "long break" ? "pause long break" : `${category}`
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
