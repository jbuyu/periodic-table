import React, { Component } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map(({ xpos, ypos, name, symbol }) => {
        return (
          <div
            style={{
              gridColumn: xpos,
              gridRow: ypos,
            }}
            key={name}
          >
            {symbol}
          </div>
        );
      })}
    </div>
  );
};
export default PeriodicTable;
