import Settings from "./components/Settings";
import Timer from "./components/Timer";
// import styled from "styled-components";
import { useState, createContext, useRef } from "react";
interface TimerContextType {
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  pomodoro: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  shortbreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longbreak: number;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;

  secondsLeft: number;
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  secondRef: React.MutableRefObject<number>;
  colorsArray: string[];
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  fontsArray: string[];
  setFont: React.Dispatch<React.SetStateAction<string>>;
  font: string;
}
export const TimerContext = createContext<TimerContextType>({
  showSettings: false,
  setShowSettings: () => {},
  pomodoro: 4,
  setPomodoro: () => {},
  shortbreak: 2,
  setShortBreak: () => {},
  longbreak: 5,
  setLongBreak: () => {},
  pause: false,
  setPause: () => {},
  setCategory: () => {},
  category: "pomodoro",
  secondsLeft: 60,
  setSecondsLeft: () => {},
  secondRef: { current: 60 },
  colorsArray: [""],
  color: "",
  setColor: () => {},
  fontsArray: ["Kumbh Sans"],
  setFont: () => {},
  font: "",
});

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [pomodoro, setPomodoro] = useState(5);
  const [shortbreak, setShortBreak] = useState(2);
  const [longbreak, setLongBreak] = useState(3);
  const [pause, setPause] = useState(false);
  const [category, setCategory] = useState<string | undefined>("pomodoro");

  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondRef = useRef(secondsLeft);
  const peachColor = "#F87070";
  const lightBlue = "#70F3F8";
  const purple = "#D881F8";
  const colorsArray = [peachColor, lightBlue, purple];
  const [color, setColor] = useState(peachColor);
  const [font, setFont] = useState("Kumbh Sans");
  const fontsArray = ["Kumbh Sans", "Roboto Slab", "Space Mono"];
  return (
    <>
      <TimerContext.Provider
        value={{
          showSettings,
          setShowSettings,
          pomodoro,
          setPomodoro,
          shortbreak,
          setShortBreak,
          longbreak,
          setLongBreak,
          pause,
          setPause,
          category,
          setCategory,
          secondsLeft,
          setSecondsLeft,
          secondRef,
          colorsArray,
          color,
          setColor,
          fontsArray,
          setFont,
          font,
        }}
      >
        <Timer />
        {showSettings ? <Settings /> : null}
      </TimerContext.Provider>
    </>
  );
}

export default App;
