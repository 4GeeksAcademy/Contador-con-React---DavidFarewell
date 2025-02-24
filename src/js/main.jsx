import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";
import SecondsCounter from "./components/SecondsCounter";


let counter = 0; 


const renderCounter = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <SecondsCounter seconds={counter} />
  );
  counter++;
};


setInterval(renderCounter, 1000);
