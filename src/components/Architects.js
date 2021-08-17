import React from "react";

const Users = (props) => {
  const { name, age } = props;
  console.log(name, age);
  return (
    <div>
      <p>Architect:</p>
    </div>
  );
};

export default Users;
