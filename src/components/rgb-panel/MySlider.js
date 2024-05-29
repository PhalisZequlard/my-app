import { useState } from "react";

function MySlider({onChange}) {
  const [value, setValue] = useState(128);
  const handleChange = (e) => {

    setValue(e.target.value);
    if (onChange){
      onChange(e.target.value);
    }
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
      <span
        style={{
          display: "inline-block",
          width: "40px",
          textAlign: "center",
        }}
      >{value}</span>
    </div>
  );
}

export default MySlider;
