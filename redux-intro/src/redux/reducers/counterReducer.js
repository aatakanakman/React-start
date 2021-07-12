import * as actionTypes from '../actions/actionTypes'


import React from 'react'
import {
    connect
} from 'react-redux'

const counterReducer = (state = 0, action) => {

    let newState;

    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload)
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload)
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)
        default:
            return state
    }

}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(counterReducer)

export default counterReducer;