import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom';

function Son1(params) {
    return <div>son1</div>
}
function Son2(params) {
    return <div>son2</div>
}
function Son(params) {
    return <div>Son</div>
}
function Father(props) {
    return <div>Father
           {props.children}
    </div>
}
function ChildrenRoute(props) {
    return (
            <div>
                <Link to='/father/son'>father</Link>
                <Link to='/father/son1'>son1</Link>
                <Link to='/father/son2'>son2</Link>
                {/* <Switch>
                    <Route path='/father/son' exact component={Father}></Route>
                    <Route path='/father/son1' component={Son1}></Route>
                    <Route path='/father/son2'  component={Son2}></Route>
                </Switch> */}
                <Route path='/father' component={Father}>
                    <Route path='/son' exact component={Son}></Route>
                    <Route path='/son1' component={Son1}></Route>
                    <Route path='/son2'  component={Son2}></Route>
                </Route>
            </div>

    )
}

export default ChildrenRoute;