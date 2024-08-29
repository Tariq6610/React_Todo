import { useEffect, useRef, useState, useContext } from "react"
import styles from "./form.module.css"
import TodoContext from "../context/TodoContext";
import TodoList from "./TodoList";

export default function Form({}){
  const [todo, settodo] = useState({name:"", done:false, id: null});

  const {todoList, setTodoList} = useContext(TodoContext)

const inputRef = useRef(null);
useEffect(()=>{
  inputRef.current?.focus();
})

function makeId(){
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}
  function addTodo() {
    if(todo.name !== ""){
      setTodoList([...todoList, todo]);
      settodo({name: "", done: false, id: null});
    }
  }

  return (
    <>
      <div className={styles.formDiv}>
        <input
          className={styles.inp}
          onChange={(e) => settodo({name : e.target.value, done:false, id: makeId()})}
          value={todo.name}
          type="text"
          placeholder="Add Todo..."
          ref={inputRef}
        />
        <button className={styles.inpbtn} onClick={addTodo}>Add</button>
      </div>

    </>
  );
}