import React from "react";

const Users = (props) => {
  const name = props.name;
  const age = props.age;
  console.log(name, age);
  return (
    <div>
      <p>Architect:</p>
    </div>
  );
};

export default Users;
