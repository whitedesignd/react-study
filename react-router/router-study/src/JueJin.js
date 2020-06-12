import React from 'react';
import {Route,Switch,NavLink } from 'react-router-dom';
function Home(props) {
    console.log(props);
    return (
        <div >{props.desc}</div>
    )
  }
  function Pins(props) {
    return (
        <div >{props.desc}</div>
    )
  }
  function Topics(props) {
    return (
        <div >{props.desc}</div>
    )
  }
  
  function All(props) {
    return (
        <>
            <ul>
                <li>
                    <NavLink  to='/jujin/all/event/10'>event</NavLink >
                </li>
                <li>
                    <NavLink  to={{
                        pathname: '/jujin/all/more',
                        search:'?count=20',
                        state: {
                            str:"没有更多"
                        }
                    }}>more</NavLink >
                </li>
                <li>
                    <NavLink  to='/jujin/all/nav'>nav</NavLink >
                </li>
            </ul>
              <Switch>
                <Route  path='/jujin/all/event/:number' 
                    component={
                        ()=><div>没有event</div>
                    }
                  render={
                    ({match}) =>{
                        return <div>number:{match.params.number}</div>
                    }
                }/>
                <Route  path='/jujin/all/more'  render={
                    ({location}) =>{
                        return <div>seach:{location.search} --state:{location.state.str} </div>
                    }
                } />
                <Route  path='/jujin/all/nav' render={
                    ({location}) =>{
                        return <div>没有了</div>
                    }
                }/>
                <Route  render={
                    (location) =>{
                        return <div>404</div>
                    }
                }/>
            </Switch>
           
        </>
    )
  }

  export  {Home,Topics,Pins,All};