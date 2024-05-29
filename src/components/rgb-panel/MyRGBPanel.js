import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  const updateR = (v) => setR(v);
  const updateG = (v) => setG(v);
  const updateB = (v) => setB(v);

  const rgbCss = {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "0 20px 20px 20px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };
  return (
    <>
      <div
        style={rgbCss}
      >
        <h2 style={{color: "white", marginBottom: 5}}>
          Current color: 
        </h2>
        <h5 style={{color: "white", marginTop: 0, marginBottom: 25}}>
          rgb({r}, {g}, {b})</h5>
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            marginBottom: 15
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} />
        <span>G: </span>
        <MySlider onChange={updateG} />
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
