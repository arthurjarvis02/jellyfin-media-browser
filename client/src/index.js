import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


ReactDOM.render(
<App />, document.getElementById("root"));


document.documentElement.setAttribute("data-bs-theme", window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");