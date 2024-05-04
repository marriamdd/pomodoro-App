import Settings from "./components/Settings";
import Timer from "./components/Timer";
import styled from "styled-components";
import { useState, createContext } from "react";
interface TimerContextType {
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  pomodoro: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  shortBreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longBreak: number;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
export const TimerContext = createContext<TimerContextType>({
  showSettings: false,
  setShowSettings: () => {},
  pomodoro: 4,
  setPomodoro: () => {},
  shortBreak: 2,
  setShortBreak: () => {},
  longBreak: 5,
  setLongBreak: () => {},
  pause: true,
  setPause: () => {},
  setCategory: () => {},
  category: "pomodoro",
});

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [pomodoro, setPomodoro] = useState(5);
  const [shortBreak, setShortBreak] = useState(2);
  const [longBreak, setLongBreak] = useState(3);
  const [pause, setPause] = useState(true);
  const [category, setCategory] = useState("pomodoro");
  return (
    <>
      <TimerContext.Provider
        value={{
          showSettings,
          setShowSettings,
          pomodoro,
          setPomodoro,
          shortBreak,
          setShortBreak,
          longBreak,
          setLongBreak,
          pause,
          setPause,
          category,
          setCategory,
        }}
      >
        <Timer />
        {showSettings ? <Settings /> : null}
      </TimerContext.Provider>
    </>
  );
}

export default App;
