import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick = {e => {
                    this.props.dispatch(decreaseCounter())
                }}>Bir azalt</button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    
    return{
        action : bindActionCreators(decreaseCounter(),dispatch)
    }

}

export default connect(mapDispatchToProps)(DecreaseCounter)

