import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HooksIceCreamContainer = () => {
  const dispatch = useDispatch();
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  return (
    <div>
      <h2>(Hooks) Number of IceCreams: {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
