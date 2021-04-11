import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <h5> 
     < a href= "https://github.com/SandraLima2813/weather-react.git">Open sourced</a>, coded by Sandra Lima
      </h5>
    </div>
   
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
