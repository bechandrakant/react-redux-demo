import { BUY_ICECREAM } from "./iceCreamType";

const iceCreamState = {
  numOfIceCream: 20,
};

export const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};
