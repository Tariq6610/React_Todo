import { useState } from "react";
import styles from "./todoList.module.css"

export default function TodoList({todoList, setTodoList, settodo, todo={todo}}){

  function handleClick(clickedTodo){
    console.log(`${clickedTodo} has been deleted`);
    setTodoList(todoList.filter(todo => todo !== clickedTodo ))
  }

 

  function doneTasks(){
    console.log(todo);
    
    

    
  }

  let listStyle = todoList.length ? styles.list : ""; 
  return (
    <><div className={listStyle}>
        {todoList.map((todo) => (
          <div key={todo} className={styles.todo}>
            <div className={styles.textBtnWrap}>
              <div>
            <h3 className={styles.text} key={todo}>{todo}</h3>
            <span><button onClick={()=> doneTasks(todo)} className={styles.doneBtn}>done</button></span>
              </div>
            <span><button onClick={()=> handleClick(todo)} className={styles.btn}>X</button></span>
            </div>
            <hr className={styles.hr}/>
          </div>
        ))}
        <div className={styles.done}></div>
        </div>
    </>
  );
}