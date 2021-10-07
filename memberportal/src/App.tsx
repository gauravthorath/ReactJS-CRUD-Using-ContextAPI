import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [members, setMembers] = useState([
    {
      firstName: "Rawadi",
      lastName: "Rathod",
      salary: "4000",
    },
    {
      firstName: "Baburao",
      lastName: "Singham",
      salary: "40000",
    },
  ]);

  function handleClick() {
    console.log("Add button click");
    //   // alert("Add button click");
  }
  return (
    <>
      <div className="App">
        <header className="App-header">Member List</header>
        <div className="App-body">
          <button type="button" className="btnPrimary" onClick={handleClick}>
            Add Member
          </button>
          <table>
            <thead>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Salary</td>
              <td>View</td>
              <td>Edit</td>
              <td>Delete</td>
            </thead>
            <tbody>
              {members.map((item, index) => {
                return (
                  <tr>
                    <td>{item.firstName} </td>
                    <td>{item.lastName}</td>
                    <td> {item.salary}</td>
                    <td>
                      <a href="#" className="App-link">
                        View
                      </a>
                    </td>
                    <td>
                      <a href="#" className="App-link">
                        Edit
                      </a>
                    </td>
                    <td>
                      <a href="#" className="App-link">
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
