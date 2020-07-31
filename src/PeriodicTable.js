import React, { Component } from "react";
import data from "./data/PeriodicTableJSON.json";

const PeriodicTable = () => {
  return (
    <div>
      {data.elements.map(({ name, symbol }) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
};
export default PeriodicTable;
