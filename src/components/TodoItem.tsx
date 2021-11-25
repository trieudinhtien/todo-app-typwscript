import React, {FC} from 'react'
import { Itask } from './Interface';

interface Props {
    todo: Itask;
    key:number;
    deleteTask(id:number) : void
    complete(id: number):void
}


const TodoItem:FC<Props> = ({todo,key, deleteTask, complete}) => {
    console.log("todo:", todo);
    
    const handlerComplete = ():void =>{
        complete(todo.id)
    }

    const handlerDelete = () :void =>{
        deleteTask(todo.id)
        
    }
    return (
        <div className="todo-container">
            <div key={key} className="todolist">
                <div onClick={handlerComplete}>{todo.todo}</div>
                <button onClick={handlerDelete}>delete</button>
            </div>
        </div>
    )
}

export default TodoItem;
