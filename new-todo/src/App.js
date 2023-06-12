import React, {useState} from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList'


function App() {

const [todos, setTodos] = useState([
  {
    id: 1,
    text: "아침먹기",
    checked: true
  },
  {
    id: 2,
    text: "점심먹기",
    checked: true
  },
  {
    id: 3,
    text: "저녁먹기",
    checked: false
  },
  {
    id: 4,
    text: "30분 걷기",
    checked: false
  },


])

	return <Template>
    <TodoList todos={todos}/>

    </Template>;
}

export default App;
