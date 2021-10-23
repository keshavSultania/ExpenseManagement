import {
  ADD_BILL,
  FILTER_DATA,
  RESET_FILTER,
  EDIT_BILL
} from "../actions/bill";

const initialState = {
  lastUsedId: 7,
  data: [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2020"
    },
    {
      id: 2,
      description: "Car wash",
      category: "Utility",
      amount: "500",
      date: "01-06-2020"
    },
    {
      id: 3,
      description: "Amazon",
      category: "Shopping",
      amount: "2030",
      date: "01-07-2020"
    },
    {
      id: 4,
      description: "House rent",
      category: "Food & Dining",
      amount: "35900",
      date: "01-03-2020"
    },
    {
      id: 5,
      description: "Tuition",
      category: "Education",
      amount: "2200",
      date: "01-12-2020"
    },
    {
      id: 6,
      description: "Laundry",
      category: "Personal Care",
      amount: "320",
      date: "01-14-2020"
    },
    {
      id: 7,
      description: "Vacation",
      category: "Travel",
      amount: "3430",
      date: "01-18-2020"
    }
  ],
  filteredData: [],
  filter: "None",
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      console.log(action.payload.category);
      return {
        ...state,
        data: [action.payload, ...state.data],
        lastUsedId: state.lastUsedId + 1,
        // categories:
        //   state.categories.indexOf(action.payload.category) < 0
        //     ? [...state.categories, action.payload.category]
        //     : [...state.categories],
        filteredData: []
      };
    case EDIT_BILL:
      const index = state.data.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      let newDataArray;
      newDataArray = [...state.data];
      newDataArray[index] = action.payload;
      let newFilteredArray = [];
      if (state.filter !== "None") {
        newFilteredArray = newDataArray.filter(
          (d) => d.category === state.filter
        );
      }
      return {
        ...state,
        data: newDataArray,
        filteredData: newFilteredArray
      };
    case FILTER_DATA:
      const newData = state.data.filter((d) => d.category === action.payload);
      return { ...state, filteredData: newData, filter: action.payload };
    case RESET_FILTER:
      return { ...state, filteredData: [], filter: action.payload };
    default:
      return state;
  }
};
