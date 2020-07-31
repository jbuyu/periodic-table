import React, { Component } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map(({ name, symbol }) => {
        return <div key={name}>{symbol}</div>;
      })}
    </div>
  );
};
export default PeriodicTable;
