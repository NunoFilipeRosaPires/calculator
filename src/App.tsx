import { useState } from "react";
import { Keyboard, Screen } from "./components";

const App = () => {
  const [value, setValue] = useState<string>("0");

  return (
    <div className="app">
      <div className="calculator">
        <h1>CALCULATOR</h1>
        <Screen value={value} />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
