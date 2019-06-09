import { resetThreatForm } from "./threatForm";
// localhost
// const API_URL = process.env.REACT_APP_API_URL;

// heroku
const API_URL =
  "https://cors-anywhere.herokuapp.com/https://honey-threat-api.herokuapp.com/api";

// action creators
const setThreats = threats => {
  return {
    type: "SET_THREATS",
    threats
  };
};

const addThreat = threat => {
  return {
    type: "ADD_THREAT",
    threat
  };
};

const deleteThreat = id => {
  return {
    type: "DELETE_THREAT",
    id
  };
};

// async action creators
export const getThreats = () => {
  return dispatch => {
    return fetch(`${API_URL}/threats`)
      .then(response => response.json())
      .then(threats => {
        dispatch(setThreats(threats));
      })
      .catch(error => console.log(error));
  };
};

export const createThreat = threat => {
  return dispatch => {
    return fetch(`${API_URL}/threats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ threat: threat })
    })
      .then(response => response.json())
      .then(threat => {
        dispatch(addThreat(threat));
        dispatch(resetThreatForm());
      })
      .catch(error => console.log(error));
  };
};

export const destroyThreat = id => {
  return dispatch => {
    return fetch(`${API_URL}/threats/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ threat: id })
    })
      .then(response => {
        dispatch(deleteThreat(id));
      })
      .catch(error => console.log(error));
  };
};
