import * as actionTypes from "./actionTypes";

export const increaseCounter = () => (
    {
    type : actionTypes.INCREASE_COUNTER,
    payload : 1
}
)


export const decreaseCounter = () => ({
    type : actionTypes.DECREASE_COUNTER,
    payload : 1
})

export const increaseByTwoCounter = () => ({
    type : actionTypes.INCREASE_BY_TWO_COUNTER,
    payload : 2
})


export const decreaseByTwoCounter = () => ({
    type : actionTypes.DECREASE_BY_TWO_COUNTER,
    payload : 1
})


