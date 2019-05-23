// action creators
export const updateThreatFormData = threatFormData => {
  return {
    type: "UPDATED_DATA",
    threatFormData
  };
};

export const resetThreatForm = () => {
  return {
    type: "RESET_FORM"
  };
};
