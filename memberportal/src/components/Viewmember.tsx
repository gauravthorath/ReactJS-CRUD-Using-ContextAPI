import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Viewmember(match: any) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  useEffect(() => {
    if (match.location.state !== undefined) {
      setData(match.location.state.item);
    }
  }, [match.location.state]);

  return (
    <div>
      <table>
        <tr>
          <td>First Name:</td>
          <td>{data.firstName} </td>
        </tr>
        <tr>
          <td>Last Name: </td>
          <td>{data.lastName}</td>
        </tr>
        <tr>
          <td>Salary: </td>
          <td>${data.salary}</td>
        </tr>

        <tr>
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
          <td></td>
        </tr>
      </table>
    </div>
  );
}
