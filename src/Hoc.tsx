import React, { Component } from "react";

const initialState = {
  name: "Manny",
  message: "HOCs are cool!!",
};

// define a type of the state and name it State
// <typeof initialState> only doing it for example, not recommended to use
type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    // create a readonly state and give it a type of State (defined above) and assign to initialState
    readonly state: State = initialState;
    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    }
  }
  return HOC;
};

export default messageHoc;
