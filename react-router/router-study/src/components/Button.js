import React, { Component } from 'react';
import {useHistory,useParams,useLocation,useRouteMatch,withRouter} from "react-router-dom"

export default withRouter(function Button(props) {
    let history = props.history;

    const handClick = (e)=> {
        history.push({
            pathname: '/second',
            state: {
                id: 3
            },
            query:{'a':6}
        })
    }
    return <button onClick={handClick}>
        history
    </button>
  }
)