import React from "react";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.email}</td>
          <td>{props.address}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
