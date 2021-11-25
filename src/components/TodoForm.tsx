import React, {FC, ChangeEvent,MouseEvent, useState } from 'react'



interface Props {
    addTodo(todo: string): void;
}

const TodoForm:FC<Props> = ({addTodo}) =>{
    const [todo, setTodo] = useState<string>("")
    
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const hanlerAddtodo =(e: MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        addTodo(todo)
        setTodo("");
    }   
    return (
        <div>
        <form className="form-todo">
            <div>
            <input type="text" placeholder="enter your task..." onChange={e => handlerChange(e)} value={todo} />
            <button onClick={hanlerAddtodo}>ADd</button>
            </div>
        </form>
        </div>
    )
}

export default TodoForm;
