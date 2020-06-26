import { DISPLAY_DATA, ADD_TO_CART ,ADD_TO_ORDER} from "./actiontypes";

export const displayData = (payload) => ({
  type: DISPLAY_DATA,
  payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const addToOrder = (payload) => ({
  type: ADD_TO_ORDER,
  payload,
});