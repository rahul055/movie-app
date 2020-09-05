import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";

function App() {
  const [selectedOptions, setSelectedOptions] = useState("");
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOptions={setSelectedOptions} />
      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
