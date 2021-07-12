import React from "react";
import "./App.css";
import LOGO from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="row">
        <img className="logo" src={LOGO} alt="logo" />
        <ul className="main-nav">
          <li>
            <a href="#">FOOD DELIVERY</a>
          </li>
          <li>
            <a href="#">HOW IT WORKS</a>
          </li>
          <li>
            <a href="#">OUR CITIES</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
      <div className="text">
        <h1>
          Goodbye Junk Food.
          <br />
          Hello Super Healthy Meals.
        </h1>
        <button className="btn btn-full">I'm Hungry</button>
        <button className="btn btn-ghost">Show me more</button>
      </div>
    </div>
  );
}

export default App;
