import React from 'react';
import { Route, Link,Redirect,
    Switch,NavLink,useParams,
    useLocation,useHistory
} from "react-router-dom";
import Button from './Button'

import ChildrenRoute from './ChildrenRoute';
function Home(props) {
    return (
        
        <div>
            I am home
        </div>
    );
}
function Second(props) {
    //console.log(props);
    return (
        <>
            I am Second
        </>
    );
}
function Three(props) {
    let match = useParams();
   // console.log(match);
    return (
        <React.Fragment>
            <div>
                I am Three5
            </div>
        </React.Fragment>
    );
}
function Error() {
    return <div>404</div>
}
function Login(props) {
    let history = useHistory();
    //console.log(history);
    return <div>Login</div>
}

function Approuter(props) {
 
    return <>
            <ul>
                <li>
                    <Link to='/'  className='rout'><span>首页</span></Link>
                </li>
                <li>
                    <Link to={{
                        pathname:'/second',
                        search:"?a=4&c=6",
                        state:{d:5},
                        query:{ 'age':20}
                    }}>第二页</Link>
                </li>
                <li>
                    <Link to='/login?c=4'>第三页</Link>
                </li>
                <li>
                    <NavLink to='/error'
                        activeStyle={{
                            color:"#000",
                            fontSize:'20px'
                        }}

                        isActive={(match, location) =>{
                            if(!match) return false;
                            return match.params.id == props.id?true:false;}
                        }

                    >
                        error 
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/father'>
                        father
                    </NavLink>
                </li> */}
            </ul>,
            <Button></Button>,
            <Switch>
                {/* <Route path='/' exact component={Home}></Route>
                */}
                <Route path='/second' strict exact component={({location,history,match})=>{
                        //console.log(location,history,match);
                        return <Second></Second>
                }}></Route>
                <Route path='/login' strict exact component={Login}></Route>
                <Route path='/second/:id' exact children={({history,match,location})=>{
                   // console.log(match,location,history);
                    return <div>
                        {match?<Three></Three>:<Error></Error>   }
                    </div>
                       
                }}></Route>
                <Route path='/error'  component={Error}>
                    <ChildrenRoute></ChildrenRoute>,
                </Route>
                {/* <Route path='/father'  component={ChildrenRoute}></Route> */}
                {/* <Redirect to="/home"  exact />  */}
                {/* <Redirect  from='/second/:id' to='/error' ></Redirect> */}
            </Switch>,
        </>;
}

export default Approuter;