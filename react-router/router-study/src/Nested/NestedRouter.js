import React from 'react';
import Left from './LeftSide';
import Right from './RightMain'
import './nested.css'

function NestedRouter(props) {
    return (
        <>
            <div className="left">
                <Left list={props.list}></Left>
            </div>
            <div className="right">
                <Right list={props.list}></Right>
            </div>
        </>
    );
}

export default NestedRouter;