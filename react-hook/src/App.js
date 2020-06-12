import React,{useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ 'text': '学习 Hook' }]);
  useEffect(()=>{
    setInterval(() => {
      console.log(1);
    }, 50000);
  },[])
  return (
    <div className="App">
     {todos.text}
     {age}
    </div>
  );
}

export default App;
