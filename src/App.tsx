import Settings from "./components/Settings";
import Timer from "./components/Timer";
import styled from "styled-components";
import { useState, createContext } from "react";
interface TimerContextType {
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TimerContext = createContext<TimerContextType>({
  showSettings: false,
  setShowSettings: () => {},
});

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <TimerContext.Provider value={{ showSettings, setShowSettings }}>
        <Timer />
        {showSettings ? <Settings /> : null}
      </TimerContext.Provider>
    </>
  );
}

export default App;
