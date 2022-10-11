import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
  const { numOfItems, buyItem } = props;

  return (
    <div>
      <h2>
        Number of {props.cake ? "Cakes" : "Icecream"}: {numOfItems}{" "}
      </h2>
      <button onClick={buyItem}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.cake
    ? state.cakes.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    numOfItems: items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
