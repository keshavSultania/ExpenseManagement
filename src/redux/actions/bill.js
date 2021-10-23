export const ADD_BILL = "ADD_BILL";
export const EDIT_BILL = "EDIT_BILL";
export const DELETE_BILL = "DELETE_BILL";
export const FILTER_DATA = "FILTER_DATA";
export const RESET_FILTER = "RESET_FILTER";

export const addBill = (billData, id) => {
  return {
    type: ADD_BILL,
    payload: billData
  };
};

export const editBill = (billData) => {
  return {
    type: EDIT_BILL,
    payload: billData
  };
};

export const deleteBill = (id) => {
  return {
    type: DELETE_BILL,
    payload: id
  };
};

export const filterBills = (filterKey) => {
  return {
    type: FILTER_DATA,
    payload: filterKey
  };
};

export const resetFilter = () => {
  return {
    type: RESET_FILTER,
    payload: "None"
  };
};
