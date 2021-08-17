import React, { Component } from "react";

class Architect extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>{`${name} is ${age} years old`}</p>
      </div>
    );
  }
}

export default Architect;
