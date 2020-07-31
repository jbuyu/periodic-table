import React, { useState } from "react";
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
const PeriodicTable = () => {
  const [show, setShow] = useState(false);

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
              onClick={() => setShow(!show)}
              onKeyDown={() => setShow(!show)}
            >
              <strong>{symbol}</strong>
              <small className="number">{number}</small>
              <small className="name">{name}</small>
              <div>
                {/* <Popup
                  show={show}
                  trigger={
                    <span
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      nu
                    </span>
                  }
                  position="right center"
                >
                  <div>{summary}</div>
                </Popup> */}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
export default PeriodicTable;
