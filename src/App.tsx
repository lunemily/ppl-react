import "./App.css";
import Home from "./home/Home";
import * as React from "react";

function App() {
  return (
    <>
      <div>
        <p>PPL {new Date().getFullYear().toString()}</p>
        <Home />
      </div>
    </>
  );
}

export default App;
