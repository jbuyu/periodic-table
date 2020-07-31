import React, { Component } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map(({ number, xpos, ypos, name, symbol }) => {
        return (
          <div
            className="element"
            style={{
              gridColumn: xpos,
              gridRow: ypos,
            }}
            key={name}
          >
            <strong>{symbol}</strong>
            <small className="number">{number}</small>
            <small className="name">{name}</small>
          </div>
        );
      })}
    </div>
  );
};
export default PeriodicTable;
