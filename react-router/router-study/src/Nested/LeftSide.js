import React from 'react';
import {Link} from "react-router-dom";

const LeftSide = props => {
    
    return (
        <div>
            <ul>
                {
                    props.list.map((v,i)=>(
                        <li key={i}>
                            <Link  to={v.to}>{v.name}</Link>
                        </li>
                    ))
                }
               
            </ul>
            
        </div>
    )};

export default LeftSide;