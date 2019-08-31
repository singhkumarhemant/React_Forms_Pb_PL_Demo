import React, { Component } from "react";
import { render } from "react-dom";
import Hero from "./containers/Hero";

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>&bull; Paisabazaar.com &bull;</h1>
        <div class="underline"></div>
        <Hero />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
