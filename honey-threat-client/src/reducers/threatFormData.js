const initialState = {
  ip: "",
  count: 1,
  lat: "",
  long: "",
  address: ""
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return {
        ...state,
        ip: action.threatFormData.ip,
        count: getRndInteger(1, 1000),
        address: action.threatFormData.address,
        lat: action.threatFormData.lat,
        long: action.threatFormData.long
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
