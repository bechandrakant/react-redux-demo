import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer2 = (props) => {
  const { numOfCakes, buyCake } = props;
  const [number, setNumber] = useState("");

  return (
    <div>
      <h2>(Custom) Number of cakes: {numOfCakes} </h2>
      <input
        type="number"
        placeholder="Enter a number eg: 2"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cakes.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2);
