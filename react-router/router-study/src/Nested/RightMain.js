import React from 'react';
import {Route,Switch,NavLink } from 'react-router-dom';

const RightMain = (props) => {
    return (
        <div>
            <Switch>
                {
                    props.list.map((v,i)=><Route key={i}  
                        exact={v.exact} path={v.to} 
                        component={ ()=>{
                            return <v.component desc={v.desc}></v.component>
                        }}></Route>
                    )
                }
            </Switch>
        </div>
    );
};

export default RightMain;
