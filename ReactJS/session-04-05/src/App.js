import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import "./App.css";
import { DECREMENT, INCREMENT } from "./reduxStore/actions";

const App = (props) => {
  // const store = useSelector((state) => state);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        Counter : {props.counterValueFromMapStateToProps}
        <br />
        <button
          onClick={() => {
            props.dispatchFunctionFromMapDispatchToProps({ type: INCREMENT });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            props.dispatchFunctionFromMapDispatchToProps({ type: DECREMENT });
          }}
        >
          -
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    counterValueFromMapStateToProps: state.count,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchFunctionFromMapDispatchToProps: dispatch,
    ...ownProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// mapStateToProps
// mapDispatchToProps
