import { Component } from "react";
import React from "react";
import Users from "./Architects";

class Display extends Component {
  render() {
    return (
      <div>
        <p>
          <h1>Architects</h1>
          <Users name="Antoni Gaudí" age="73" />
          <Users name="Frank Lloyd Wright" age="92" />
          <Users name="Mies Van der Rohe" age="83" />
          <Users name="Philip Johnson" age="99" />
        </p>
      </div>
    );
  }
}

export default Display;
