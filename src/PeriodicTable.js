import React, { Component, useState } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
import renderPopup from "./renderPopup";
import Popup from "reactjs-popup";

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
class PeriodicTable extends Component {
  state = {
    show: false,
  };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="periodic-table">
        {data.elements.map(
          ({ number, xpos, ypos, name, symbol, category, summary }) => {
            return (
              <div
                className="element"
                style={{
                  gridColumn: xpos,
                  gridRow: ypos,
                  borderColor: colorMap[category],
                }}
                key={name}
                onClick={() => this.showModal()}
                //   onKeyDown={() => setShow(!show)}
              >
                <strong>{symbol}</strong>
                <small className="number">{number}</small>
                <small className="name">{name}</small>
              </div>
            );
          }
        )}
      </div>
    );
  }
}
export default PeriodicTable;
