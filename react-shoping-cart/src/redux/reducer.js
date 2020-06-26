import { DISPLAY_DATA,ADD_TO_CART,ADD_TO_ORDER } from "./actiontypes";
import data from "../data.json";

const initState = {
  allProduct: data,
  cartArray:[],
  orderArray:[],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_DATA: {
      return {
        allProduct: state.allProduct,
      };
    }
    case ADD_TO_CART: {
      console.log(action.payload)
      const {payload}=action;
      let item=state.allProduct.find((ele)=>ele.id===payload)
      return {
        ...state,
        cartArray: [...state.cartArray,item],
      };
    }
    case ADD_TO_ORDER: {
      console.log(action.payload)
      const {payload}=action;
      return {
        ...state,
        orderArray: [...state.orderArray,payload],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
