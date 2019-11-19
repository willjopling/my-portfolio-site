import React from "react";
import "./stylesheets/App.css";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <div className="page-background"></div>
    </div>
  );
}

export default App;
