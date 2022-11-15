import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div id="app-content">
        <Navbar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
