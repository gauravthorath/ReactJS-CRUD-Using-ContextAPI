import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Memberlist(match: any) {
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

  useEffect(() => {
    if (match.location.state !== undefined) {
      if (match.location.state.Operation === "Add") {
        setMembers((oldMembers) => [
          ...oldMembers,
          match.location.state.memberData,
        ]);
      } else {
        let tmpMembers = [...members];
        tmpMembers[match.location.state.indexId].firstName =
          match.location.state.memberData.firstName;
        tmpMembers[match.location.state.indexId].lastName =
          match.location.state.memberData.lastName;
        tmpMembers[match.location.state.indexId].salary =
          match.location.state.memberData.salary;
        setMembers(tmpMembers);
      }
    }
  }, [match.location.state]);

  function deleterecord(index: number, item: any) {
    let choice = window.confirm(
      `Are you sure you want to delete ${item.firstName} ${item.lastName}'s record?`
    );
    console.log(choice);
    if (choice) {
      let tmpMembers = [...members];
      tmpMembers.splice(index, 1);
      setMembers(tmpMembers);
    } else {
      return false;
    }
  }

  return (
    <div>
      <br />
      <br />
      <Link to="/addmember" className="btnPrimary">
        Add Member
      </Link>
      <br /> <br /> <br />
      <div> Member List</div>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Salary</td>
            <td>View</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {members.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.firstName} </td>
                <td>{item.lastName}</td>
                <td> {item.salary}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/viewmember",
                      state: { item },
                    }}
                  >
                    View
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/editmember",
                      state: { item, index },
                    }}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="App-link"
                    onClick={() => deleterecord(index, item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
