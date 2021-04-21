import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 10, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
      break;
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
      break;
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
      break;

    default:
      return state;
      break;
  }
};

export default counterReducer;

//Javascript Immutability
