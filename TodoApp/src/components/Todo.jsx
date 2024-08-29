import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import DoneTasks from "./DoneTasks"
import { useState } from "react";

export default function Todo(){


    
    return(
        <>
        <Form />
        <TodoList/>
        <DoneTasks />
        </>
    )
}