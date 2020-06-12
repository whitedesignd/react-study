import {createStore,compose,} from 'redux'
import reducer from './reducer.js'

let data = {
   number:1
   
}
export default createStore(reducer,data)