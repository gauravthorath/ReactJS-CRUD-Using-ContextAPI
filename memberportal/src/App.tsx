import React from "react";
import "./App.css";
import Addmember from "./components/Addmember";
import Editmember from "./components/Editmember";
import Viewmember from "./components/Viewmember";
import Memberlist from "./components/Memberlist";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
