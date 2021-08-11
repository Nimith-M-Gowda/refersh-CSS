import React from "react";
import ReactDOM from "react-dom";
import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./Day3";
import CH1d from "./CH1d";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CH1d />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
