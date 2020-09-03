import React from "react";
import "./App.css";
// import Message from "./Message";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

class App extends React.Component {
  render() {
    // const firstValue: string = "Manny";
    // const firstValue: number = 37;
    // const firstValue: boolean = true;
    // const firstValue: number[] = [37, 1, 3];
    // const firstValue: Array<string> = ["37", "1", "3"];
    // tuple - a type of array that allows for multiple types
    // let aTuple: [string, number] = ["Manny", 1];
    //enum - give names to numeric values, Codes.first is 0, Codes.second is 2
    // enum Codes {
    //   first,
    //   second = 2,
    // }
    // any - not sure the type, e.x. values from code from 3rd party w/o using typescript, etc.
    // variables of type any allow you to access arbitrary properties, even ones that don't exist
    // unknown - don;t know the type, such as dynamic content - user defined input
    // or want to intentionally accept all values, etc
    // void - commonly used as the return type of functions that do not return a value
    // const warning = (): void => {
    //   console.log("Warning!");
    // };

    return (
      <div className="App">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
