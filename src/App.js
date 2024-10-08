import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import PlayerScreen from "./components/PlayerScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/player" component={PlayerScreen} />
      </Switch>
    </Router>
  );
}

export default App;
