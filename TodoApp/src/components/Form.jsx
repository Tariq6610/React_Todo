import { useEffect, useRef, useState } from "react"
import styles from "./form.module.css"

export default function Form({todo, todoList, setTodoList, settodo}){
const inputRef = useRef(null);
useEffect(()=>{
  inputRef.current?.focus();
})
  function addTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo.name]);
    settodo({name: "", done: false});
  }

  return (
    <>
      <div className={styles.formDiv}>
        <input
          className={styles.inp}
          onChange={(e) => settodo({name : e.target.value, done:false})}
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