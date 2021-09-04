import React from "react";
import ReactDOM from "react-dom";
//pages
import IndexPage from "./pages";
//css
import "./cssReset.css"
import "./app.css";

const App = () => {
  return (
    <IndexPage />
  )
}

ReactDOM.render(<App />, document.querySelector("#content"));