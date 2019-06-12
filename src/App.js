import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary">
          <Navbar title="Github Finder" icon="fab fa-github" />
        </nav>
        <Users />
      </div>
    );
  }
}

export default App;
