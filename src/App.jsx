import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [result, setResult] = useState("");
  const [comment, setComment] = useState("");
  const handleCalculate = () => {
    const h = parseFloat(heightValue);
    const w = parseFloat(weightValue);
    if (!isNaN(h) && !isNaN(w)) {
      const bmi = w / (h * h);
      setResult(bmi);
      if (bmi < 18.5) setComment("Underweight");
      else if (bmi >= 18.5 && bmi < 22.5) setComment("Normal weight");
      else if (bmi >= 25 && bmi < 29.9) setComment("Over weight");
      else setComment("Obese");
      setHeightValue("");
      setWeightValue("");
    }
  };
  const handleReset = () => {
    console.log(`Resetting the values`);
    setHeightValue("");
    setWeightValue("");
    setResult("");
    setComment("");
  };

  return (
    <div className="master flex_y">
      <h1 className="heading">BMI Calculator</h1>
      <div className="input flex_y">
        <label htmlFor="weight" className="inputLabel">
          Weight
        </label>
        <input
          type="text"
          placeholder="In Kilograms"
          onChange={(e) => setWeightValue(e.target.value)}
          name="weight"
          id="weight"
          value={weightValue}
          className="inputArea"
        />
      </div>
      <div className="input flex_y">
        <label htmlFor="height" className="inputLabel">
          Height
        </label>
        <input
          type="text"
          placeholder="In Meters"
          onChange={(e) => setHeightValue(e.target.value)}
          name="height"
          id="height"
          value={heightValue}
          className="inputArea"
        />
      </div>
      <div className="btnDiv flex">
        <button className="actionBtn" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="actionBtn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="result flex">{`${result ? result : ""}  ${
        comment ? comment : ""
      }`}</div>
    </div>
  );
};

export default App;
