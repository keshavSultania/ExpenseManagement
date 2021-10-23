import { SHOW_FORM } from "../actions/billform";

const initialState = {
  show: false,
  editFormData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        show: !state.show,
        editFormData: action.payload
      };
    default:
      return state;
  }
};
