import React, { Component } from "react";
import CommentForm from "./components/CommentForm";
import CommentView from "./components/CommentView";

export default class CommentState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      value: ""
    };
  }

  handleOnChange = event => {
    this.setState({ value: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    let comments = this.state.comments;
    comments.push(this.state.value);
    this.setState({ comments: comments, value: "" });
  };

  render() {
    return (
      <div>
        <CommentForm
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          value={this.state.value}
        />
        {this.state.comments.map((comment, index) => (
          <CommentView key={index} comment={comment} />
        ))}
      </div>
    );
  }
}
