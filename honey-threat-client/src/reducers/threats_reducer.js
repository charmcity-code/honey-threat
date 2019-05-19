export default (state = [], action) => {
  switch (action.type) {
    case "GET_THREATS_SUCCESS":
      return action.threats;

    default:
      return state;
  }
};
