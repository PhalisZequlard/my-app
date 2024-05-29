import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";

function App() {
  return (
    <div className="App">
      <div>
        <h1>MySlider</h1>
        <MySlider />
        <h1>MyRGBPanel</h1>
        <MyRGBPanel />
      </div>
      <div>
        <h1>MyCalculator</h1>
        <MyCalculator />
      </div>
      <div>
        <h1>TicTacTow</h1>
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
