import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleCommenthange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleTopichange = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleMondayChange = (event) => {
    this.setState({ monday: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(
      "UserName :" +
        this.state.userName +
        "  comments :" +
        this.state.comments +
        " Technology :" +
        this.state.topic +
        " Monday selected :" +
        this.state.monday
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="user"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            name="comments"
            value={this.state.comments}
            onChange={this.handleCommenthange}
          ></textarea>
        </div>

        <div>
          <label>Topic</label>
          <select
            name="topic"
            value={this.state.topic}
            onChange={this.handleTopichange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <div>
          <label>Monday</label>
          <input
            type="checkbox"
            name="monday"
            isChecked={this.state.monday}
            onChange={this.handleMondayChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
