import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className ="container">
      <Weather defaultCity="Berlin"/>

    <footer>
     Coded by  Pollina Iliev {" "} 
      <a 
      href="https://github.com/pilaee/react-weather-app"
      target="_blank"
      rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
    </footer>
      </div>
  </div>
  );
}


