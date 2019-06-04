import React, { Component } from "react";
import { connect } from "react-redux";
import { updateThreatFormData } from "../actions/threatForm";
import { createThreat } from "../actions/threatActions";
import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

class ThreatForm extends Component {
  constructor() {
    super();

    this.state = {
      lat: "",
      long: ""
    };
  }

  getLatLong = location => {
    Geocode.fromAddress(location).then(
      response => {
        this.setState({
          lat: response.results[0].geometry.location.lat,
          long: response.results[0].geometry.location.lng
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  handleOnChange = event => {
    const { name, value } = event.target;

    const currentThreatFormData = Object.assign({}, this.props.threatFormData, {
      [name]: value,
      lat: this.state.lat,
      long: this.state.long
    });

    if (currentThreatFormData.ip === "") {
      alert("IP cannot be blank.");
    }

    this.getLatLong(this.props.threatFormData.address);
    this.props.updateThreatFormData(currentThreatFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createThreat(this.props.threatFormData);
  };

  render() {
    return (
      <div className='header'>
        <h6>Create New Threat</h6>
        <form onSubmit={this.handleOnSubmit}>
          <label>IP Address</label>{" "}
          <input
            name='ip'
            type='text'
            onChange={this.handleOnChange}
            value={this.props.threatFormData.ip}
          />{" "}
          <label>Location</label>{" "}
          <input
            name='address'
            type='text'
            onChange={this.handleOnChange}
            value={this.props.threatFormData.address}
          />{" "}
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
