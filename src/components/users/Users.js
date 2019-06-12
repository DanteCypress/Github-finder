import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "DanteCypress",
        avatar_url: "https://avatars1.githubusercontent.com/u/37960812?v=4",
        html_url: "https://github.com/DanteCypress"
      },
      {
        id: "2",
        login: "a-visai",
        avatar_url: "https://avatars1.githubusercontent.com/u/47129670?v=4",
        html_url: "https://github.com/a-visai"
      },
      {
        id: "3",
        login: "MuzitK",
        avatar_url: "https://avatars1.githubusercontent.com/u/47538843?v=4",
        html_url: "https://github.com/muzitk"
      },
      {
        id: "4",
        login: "Elshadai1",
        avatar_url: "https://avatars1.githubusercontent.com/u/47315015?v=4",
        html_url: "https://github.com/Elshadai1"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
