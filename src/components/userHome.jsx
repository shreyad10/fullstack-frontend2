import React from "react";
import Table from "./tableComponent";
import { useNavigate } from "react-router-dom";

export default function UserHome({ userData }) {
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    navigate('/sign-in')
  };
  console.log(userData);
  return (
    <div>
      <br/>
      <h1>User Details</h1>
      <br/>
      <Table 
        name={userData.name}
        age={userData.age}
        email={userData.email}
        address={userData.address}
      />

      <br />
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
}
