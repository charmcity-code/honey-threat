import { resetThreatForm } from "./threatForm";

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
    return fetch("http://localhost:3001/api/threats")
      .then(response => response.json())
      .then(threats => {
        dispatch(setThreats(threats));
      });
  };
};

export const createThreat = threat => {
  return dispatch => {
    return fetch("http://localhost:3001/api/threats", {
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
      });
  };
};
