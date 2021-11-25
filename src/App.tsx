import React, { FC, useState } from 'react';
import './App.css';
import { Itask } from './components/Interface';
import TodoForm from './components/TodoForm';
import TodoTask from './components/TodoItem';



const App: FC = () => {
  const [todolist, setTodolist] = useState<Itask[]>([
    {
      todo: "code",
      status: false,
      id: 1
    },
    {
      todo: "test code",
      status: false,
      id: 2
    }

  ])

  const addTodo = (todo: string) =>{
    const data = {todo: todo, status: false, id: Math.random() *1000}
    setTodolist([...todolist, data]);
  }
  const complete = (id: number): void => {
    setTodolist(
      todolist.map((todo: Itask) =>
          {
            if(todo.id === id){
              return {...todo, status: !todo.status}
            }
            return todo;
          }
      )
    );
  };

  const deleteTask = (id: number):void => {
    let newList = todolist.filter((todo: Itask) =>
        todo.id !== id 
      )
    setTodolist(newList);
  }
  return (
    <div className="App">
      <h1>todo App ahihi</h1>
      <TodoForm addTodo={addTodo}/>
      <div className="todoList">
          {todolist.map((todo: Itask, key: number) => (
            <TodoTask
              key={key}
              todo={todo}
              deleteTask={deleteTask}
              complete={complete}
            />
          ))}
        </div>

    </div>
  );
}

export default App;
