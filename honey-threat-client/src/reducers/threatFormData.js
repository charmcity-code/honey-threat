const initialState = { ip: "", count: 1, lat: "", long: "", country: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return { ...state, ip: action.threatFormData.ip };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};
