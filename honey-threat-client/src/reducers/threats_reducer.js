export default (state = [], action) => {
  switch (action.type) {
    case "SET_THREATS":
      return action.threats;

    case "ADD_THREAT":
      return state.concat(action.threat);

    case "DELETE_THREAT":
      return state.filter(threat => threat.id !== action.id);

    default:
      return state;
  }
};
