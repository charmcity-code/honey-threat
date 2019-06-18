import React, { Component } from "react";

class CommentView extends Component {
  render() {
    return (
      <div>
        {this.props.comment}
        {this.props.likeNumber}
        <button onSubmit={this.props.handleVote}>test</button>
      </div>
    );
  }
}

export default CommentView;
