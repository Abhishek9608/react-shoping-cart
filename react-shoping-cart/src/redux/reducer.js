import { DISPLAY_DATA } from "./actiontypes";
import data from "../data.json";

const initState = {
  allProduct: data,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_DATA: {
      return {
        allProduct: state.allProduct,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
