import React, { createContext, useReducer, useContext, useFef } from 'react';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.todo);
		case 'TOGGLE':
			return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
}

const initialTodos =[
  {
    id:1,
    text: '아침밥 먹기',
    done: true
  },
  {
    id:2,
    text: '프로그래머스 문제 풀기',
    done: true 
  },
  {
    id:3,
    text: '저녁에 30분 걷기',
    done: false 
  },
  {
    id:4,
    text: '12시 전에 잠자기',
    done: false
  },
];

export function TodoProvider({ childeren}) {
  const [state, dispatch] =useReducer(todoReducer,initialTodos);
  const nextId = useFef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {childeren}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}