import React from "react";
import "./WeatherTable.css";

//Convert epoch time
export const convertEpoch = epoch => {
  let epochDate = new Date(epoch * 1000);
  let year = epochDate.getFullYear();
  let month = epochDate.getMonth();
  let day = epochDate.getDate();
  let hours = epochDate.getHours();
  return `${year}-0${month + 1}-${day} ${hours}:00`;
};

//format temperature
export const formatTemp = temp => {
  return `${Math.round(temp)} C`;
};

//format difference in temperature
export const formatDelta = delta => {
  return `${delta.toFixed(2)} C`;
};

//parse weather details to retrieve array of temperature or its difference
export const parseQuery = (query, weatherDetails) => {
  let len = weatherDetails.length;
  let details = new Array(len);
  if (query === "temp") {
    for (let i = 0; i < len; i++) {
      details[i] = weatherDetails[i].main.temp;
    }
  } else if (query === "delta") {
    for (let i = 0; i < len; i++) {
      details[i] =
        weatherDetails[i].main.temp_max - weatherDetails[i].main.temp_min;
    }
  }
  return details;
};

//calculate average of the items in an array
export const calculateAverage = items => {
  let sum = 0;
  let len = items.length;
  for (let i = 0; i < len; i++) {
    sum += items[i];
  }
  return sum / len;
};

//find average of temperature / difference in temperature
export const findQueryAverage = (query, weatherDetails) => {
  return calculateAverage(parseQuery(query, weatherDetails));
};

const WeatherTable = ({ selection, weatherDetails }) => {
  return (
    <table>
      <thead>
        <tr>
          <th data-testid="table-tag">{selection}</th>
          <th>Suhu</th>
          <th>Perbedaan</th>
        </tr>
      </thead>
      <tbody>
        {weatherDetails.map(row => (
          <tr key={row.dt}>
            <td>{convertEpoch(row.dt)}</td>
            <td>{formatTemp(row.main.temp)}</td>
            <td>{formatDelta(row.main.temp_max - row.main.temp_min)}</td>
          </tr>
        ))}
        <tr>
          <td className="bottom-row">Rata-rata</td>
          <td className="bottom-row">
            {formatTemp(findQueryAverage("temp", weatherDetails))}
          </td>
          <td className="bottom-row">
            {formatDelta(findQueryAverage("delta", weatherDetails))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;
