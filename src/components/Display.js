import { Component, React } from "react";
import Architect from "./Architects";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Architects</h1>
        <Architect name="Antoni Gaudí" age="73" />
        <Architect name="Frank Lloyd Wright" age="92" />
        <Architect name="Mies Van der Rohe" age="83" />
        <Architect name="Philip Johnson" age="99" />
      </div>
    );
  }
}

export default Display;
