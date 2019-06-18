import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleOnSubmit}>
        <label>New Comment</label>{" "}
        <input
          type='text'
          name='comment'
          onChange={this.props.handleOnChange}
          value={this.props.value}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default CommentForm;
