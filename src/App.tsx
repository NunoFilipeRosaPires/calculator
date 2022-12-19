import { Keyboard, Screen } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="calculator">
        <h1>CALCULATOR</h1>
        <Screen />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
