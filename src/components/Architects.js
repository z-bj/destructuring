import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div>
        <p>
          Architect:{this.props.name} {this.props.age}
        </p>
      </div>
    );
  }
}

export default Users;
