import React, { Component } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};
const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map(({ number, xpos, ypos, name, symbol, category }) => {
        return (
          <div
            className="element"
            style={{
              gridColumn: xpos,
              gridRow: ypos,
              borderColor: colorMap[category],
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
