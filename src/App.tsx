import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    // const firstValue: string = "Manny";
    // const firstValue: number = 37;
    // const firstValue: boolean = true;
    // const firstValue: number[] = [37, 1, 3];
    const firstValue: Array<string> = ["37", "1", "3"];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstValue} is of {typeof firstValue} type!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
