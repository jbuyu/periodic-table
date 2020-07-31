import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Tableu{" "}
          <span role="img" aria-label="smiley">
            😇
          </span>
        </h1>
      </header>
      <PeriodicTable />
    </div>
  );
}

export default App;
