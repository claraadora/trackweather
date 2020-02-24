import React from "react";
import "./CitySelection.css";

//drop down menu for selecting cities
const CitySelection = ({ selection, setSelection }) => {
  return (
    <div>
      <span className="select-city">Choose a city: </span>
      <select
        data-testid="select-tag"
        value={selection}
        onChange={event => setSelection(event.target.value)}
      >
        <option value="Jakarta">Jakarta</option>
        <option value="Singapore">Singapore</option>
        <option value="Bangkok">Bangkok</option>
      </select>
    </div>
  );
};

export default CitySelection;
