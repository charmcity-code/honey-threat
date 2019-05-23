import React, { Component } from "react";
import { connect } from "react-redux";
import { updateThreatFormData } from "../actions/threatForm";
import { createThreat } from "../actions/threatActions";

class ThreatForm extends Component {
  handleOnChange = event => {
    const ip = event.target.value;
    const currentThreatFormData = Object.assign({}, this.props.threatFormData, {
      ip
    });
    this.props.updateThreatFormData(currentThreatFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createThreat(this.props.threatFormData);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        Add New IP Threat
        <form onSubmit={this.handleOnSubmit}>
          <label>IP Address </label>
          <input
            type='text'
            onChange={this.handleOnChange}
            value={this.props.threatFormData.ip}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    threatFormData: state.threatFormData
  };
};

export default connect(
  mapStateToProps,
  { updateThreatFormData, createThreat }
)(ThreatForm);
