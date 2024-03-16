import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onColorChange, color }) {
  
  function handleClick() {
    const newColor = getRandomColor();
    onColorChange(newColor);
  }

  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
