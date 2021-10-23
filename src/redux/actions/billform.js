export const SHOW_FORM = "SHOW_FORM";

export const toggleBillForm = (formData) => {
  console.log("SHOW_FORM clicked");

  return {
    type: "SHOW_FORM",
    payload: formData
  };
};
