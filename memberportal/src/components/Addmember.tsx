import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Addmember() {
  const [memberData, setMemberData] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  let handleChange = (e: any) => {
    const { name, value } = e.target;
    setMemberData((prevState) => ({ ...prevState, [name]: value }));
  };

  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <div>First Name:</div>
          </td>
          <td>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <div>Last Name:</div>
          </td>
          <td>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <div>Salary:</div>
          </td>
          <td>
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              onChange={handleChange}
            ></input>
          </td>{" "}
        </tr>
        <tr>
          <td>
            <Link
              className="btnPrimary"
              to={{
                pathname: "/memberList",
                state: { memberData, Operation: "Add" },
              }}
            >
              Save
            </Link>
          </td>
          <td>
            <button
              name="cancel"
              value="Cancel"
              onClick={handleBack}
              className="btnPrimary"
            >
              Cancel
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
