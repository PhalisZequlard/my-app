import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";
import MySlider from "./components/MySlider";
import MyCalculator from "./components/MyCalculator";

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
    </div>
  );
}

export default App;
