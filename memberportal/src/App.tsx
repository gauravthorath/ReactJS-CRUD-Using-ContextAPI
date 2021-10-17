import React, { createContext, useState } from "react";
import "./App.css";
import Addmember from "./components/Addmember";
import Editmember from "./components/Editmember";
import Viewmember from "./components/Viewmember";
import Memberlist from "./components/Memberlist";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const MemberContext = createContext([] as any);

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
      salary: "400001",
    },
  ]);

  return (
    <div className="App">
      <MemberContext.Provider value={{ members, setMembers }}>
        <header className="App-header">Member Portal</header>
        <Router>
          <Switch>
            <Route path="/addmember" component={Addmember} />
            <Route path="/editmember" component={Editmember} />
            <Route path="/viewmember" component={Viewmember} />
            <Route path="/memberlist" component={Memberlist} />
            <Route path="/" exact component={Memberlist} />
          </Switch>
        </Router>
      </MemberContext.Provider>
    </div>
  );
}
