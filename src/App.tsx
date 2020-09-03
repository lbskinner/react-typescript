import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
