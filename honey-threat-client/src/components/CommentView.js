import React, { Component } from "react";

class CommentView extends Component {
  render() {
    return (
      <div>
        {this.props.comment} {this.props.button} {this.props.votes}
      </div>
    );
  }
}

export default CommentView;
