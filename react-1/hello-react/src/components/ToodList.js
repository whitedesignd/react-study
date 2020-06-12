import React from 'react';
import {connect} from 'react-redux';
import * as toodAction from './../redux/action.js'
import {bindActionCreators} from 'redux'
const ToodList = (props) =>{
    console.log(props);
    return (
        <div>
            <button onClick={()=>props.toodA.actionAdd(2)}>点击+</button>
            <button onClick={()=>props.toodA.actionSubtraction(1)}>点击-</button>
            <p>{props.number}</p>
        </div>
    )
}
let mapState = state => {
    return {
        number: state.number
    }
    
}
let mapDispatch = dispatch =>{
    return {
        toodA: bindActionCreators(toodAction,dispatch)
    }
    
}
export default connect(mapState,mapDispatch)(ToodList);