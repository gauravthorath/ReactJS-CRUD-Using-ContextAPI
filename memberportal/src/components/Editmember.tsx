import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Editmember(match: any) {
  const [memberData, setMemberData] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  const [index, setIndex] = useState("");

  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  let handleChange = (e: any) => {
    const { name, value } = e.target;
    setMemberData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (match.location.state !== undefined) {
      setMemberData(match.location.state.item);
      setIndex(match.location.state.index);
    }
  }, [match.location.state]);

  return (
    <div>
      <table>
        <tr>
          <td>First Name:</td>
          <td>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={memberData.firstName}
              onChange={handleChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Last Name: </td>
          <td>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={memberData.lastName}
              onChange={handleChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Salary: </td>
          <td>
            <input
              type="text"
              id="salary"
              name="salary"
              value={memberData.salary}
              onChange={handleChange}
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            <Link
              className="btnPrimary"
              to={{
                pathname: "/memberList",
                state: { memberData, Operation: "Edit", indexId: index },
              }}
            >
              Update
            </Link>
          </td>
          <td>
            <button
              name="back"
              value="Back"
              onClick={handleBack}
              className="btnPrimary"
            >
              Back
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
