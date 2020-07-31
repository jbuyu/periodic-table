import React, { Component } from "react";
import Popup from "reactjs-popup";
const renderPopup = ({ summery }) => {
  return (
    <div>
      <Popup>
        <div>{summery}</div>
      </Popup>
    </div>
  );
};

export default renderPopup;
