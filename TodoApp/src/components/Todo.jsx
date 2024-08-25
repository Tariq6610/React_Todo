import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import DoneTasks from "./DoneTasks"
import { useState } from "react";

export default function Todo(){
    const [todo, settodo] = useState({name:"", done:false});
    const [todoList, setTodoList] = useState([]);
    
    
    return(
        <>
        <Form todo={todo} todoList={todoList} setTodoList={setTodoList} settodo={settodo}/>
        <TodoList todoList={todoList} setTodoList={setTodoList} settodo={settodo} todo={todo}/>
        {/* <DoneTasks /> */}
        </>
    )
}