import Settings from "./components/Settings";
import Timer from "./components/Timer";

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

  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;

  category: string | undefined;
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;

  pomodoSecondsLeft: number;
  setPomodoSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  pomoSecondRef: React.MutableRefObject<number>;
  colorsArray: string[];
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  fontsArray: string[];
  setFont: React.Dispatch<React.SetStateAction<string>>;
  font: string;

  longSecondsLeft: number;
  setLongSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  longSecondRef: React.MutableRefObject<number>;

  shortSecondsLeft: number;
  setShortSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  shortSecondsLeftRef: React.MutableRefObject<number>;
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

  setCondition: () => {},
  condition: "start",

  setPause: () => {},
  setCategory: () => {},
  category: "pomodoro",
  pomodoSecondsLeft: 60,
  setPomodoSecondsLeft: () => {},

  shortSecondsLeft: 60,
  setShortSecondsLeft: () => {},
  shortSecondsLeftRef: { current: 60 },

  longSecondsLeft: 60,
  setLongSecondsLeft: () => {},
  longSecondRef: { current: 60 },

  pomoSecondRef: { current: 60 },
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

  const [condition, setCondition] = useState("start");
  const [category, setCategory] = useState<string | undefined>("pomodoro");

  const [pomodoSecondsLeft, setPomodoSecondsLeft] = useState(0);
  const pomoSecondRef = useRef(pomodoSecondsLeft);

  const [longSecondsLeft, setLongSecondsLeft] = useState(0);
  const longSecondRef = useRef(longSecondsLeft);

  const [shortSecondsLeft, setShortSecondsLeft] = useState(0);
  const shortSecondsLeftRef = useRef(shortSecondsLeft);

  const colorsArray = ["#F87070", "#70F3F8", "#D881F8"];
  const [color, setColor] = useState("#F87070");
  const [font, setFont] = useState("Kumbh Sans");
  const fontsArray = ["Kumbh Sans", "Roboto Slab", "Space Mono"];

  return (
    <TimerContext.Provider
      value={{
        shortSecondsLeftRef,
        setShortSecondsLeft,
        shortSecondsLeft,
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
        pomodoSecondsLeft,
        setPomodoSecondsLeft,
        pomoSecondRef,
        colorsArray,
        color,
        setColor,
        fontsArray,
        setFont,
        font,
        setCondition,
        condition,
        longSecondsLeft,
        setLongSecondsLeft,
        longSecondRef,
      }}
    >
      <Timer />
      {showSettings ? <Settings /> : null}
    </TimerContext.Provider>
  );
}

export default App;
