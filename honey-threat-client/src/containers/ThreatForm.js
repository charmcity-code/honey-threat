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
          lat: response.results[0].geometry.location.lat.toString(),
          long: response.results[0].geometry.location.lng.toString()
        });

        console.log(this.state.lat, this.state.long);
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
    console.log("data: ", currentThreatFormData);

    this.getLatLong(this.props.threatFormData.address);
    this.props.updateThreatFormData(currentThreatFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createThreat(this.props.threatFormData);
  };

  render() {
    return (
      <div>
        Add New IP Threat
        <form onSubmit={this.handleOnSubmit}>
          <label>IP Address </label>
          <input
            name='ip'
            type='text'
            onChange={this.handleOnChange}
            value={this.props.threatFormData.ip}
          />
          <label>Location </label>
          <input
            name='address'
            type='text'
            onChange={this.handleOnChange}
            value={this.props.threatFormData.address}
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
