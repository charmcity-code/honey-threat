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
    let index = this.state.comments.length;
    let comments = this.state.comments;
    comments.push({ index: index, name: this.state.value, votes: 0 });
    this.setState({ index: index, comments: comments, value: "" });
  };

  handleOnLike = event => {
    const updatedComments = this.state.comments.map(comment => {
      if (event.target.name === comment.index.toString()) {
        return Object.assign({}, comment, {
          votes: comment.votes + 1
        });
      } else {
        return comment;
      }
    });

    this.setState({ comments: updatedComments });
  };

  render() {
    return (
      <div>
        <CommentForm
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          value={this.state.value}
        />

        {this.state.comments.map(comment => (
          <CommentView
            key={comment.index}
            comment={comment.name}
            votes={comment.votes}
            button={
              <button name={comment.index} onClick={this.handleOnLike}>
                Like
              </button>
            }
          />
        ))}
      </div>
    );
  }
}
