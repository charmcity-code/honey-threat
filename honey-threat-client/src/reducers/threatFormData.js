const initialState = {
  ip: "",
  count: getRndInteger(1, 1000),
  lat: "",
  long: "",
  country: "Unknown \u{1F3F4}"
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return {
        ...state,
        ip: action.threatFormData.ip
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
