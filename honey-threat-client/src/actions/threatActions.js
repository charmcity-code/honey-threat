const API_URL = process.env.REACT_APP_API_URL;

const setThreats = threats => {
  return {
    type: "GET_THREATS_SUCCESS",
    threats
  };
};

// async actions
export const getThreats = () => {
  return dispatch => {
    return fetch(`${API_URL}/threats`)
      .then(response => response.json())
      .then(threats => dispatch(setThreats(threats)));
  };
};
