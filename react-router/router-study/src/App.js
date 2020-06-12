import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Approuter from './components/Approuter'
import {useHistory} from "react-router-dom"
import Nest from './Nested/NestedRouter'

import  {Home,All,Topics,Pins} from './JueJin';
let com;
function App() {
  let state = {
    list: [
      {
        name:'首页',
        exact: true,
        to:"/jujin/home",
        component:Home,
        desc:" 我是 home"
      },
      {
        name:'沸点',
        exact: true,
        to:"/jujin/pins",
        component:Pins,
        desc:" 我是 Pins"
      },
      {
        name:'话题',
        exact: true,
        to:"/jujin/topics",
        component:Topics,
        desc:" 我是 Topics"
      },
      {
        name:'活动',
        exact: false,
        to:"/jujin/all",
        component:All,
        desc:" 我是 aLL",
        childrem: []
      },

    ]
  };
  return (
    <div className="App">
            
      {/* <Approuter /> */}
      <Suspense fallback={<div>Loading...</div>}>
      
      </Suspense>

      <h3>嵌套路由</h3>
      <Nest list={state.list}></Nest>
    </div>
  );
}

export default App;