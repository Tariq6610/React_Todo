import { useContext, useState } from "react";
import styles from "./todoList.module.css"
import TodoContext from "../context/TodoContext";

export default function TodoList(){
  
  const {todoList, setTodoList} = useContext(TodoContext)

  function handledelete(id){
    let newArr = todoList.filter((todo) => todo.id !== id)
    setTodoList(newArr) 
  }

 

  function doneTasks(id){
  let newArr = todoList.map((todo)=> {
      if(todo.id === id){
        todo.done = true;
        return todo
      }
      return todo;
    } )

    setTodoList(newArr)

    
  }

  let ListOfTodos = todoList.filter((todo)=> todo.done === false) 
  let listStyle = ListOfTodos.length ? styles.list : ""; 
  return (
    <><div className={listStyle}>
        {ListOfTodos.map((val) => (
          <div key={val.id} className={styles.todo}>
            <div className={styles.textBtnWrap}>
              <div>
            <h3 className={styles.text} key={val.id}>{val.name}</h3>
              </div>
            <span className={styles.btnWrap}>
              <button onClick={()=> doneTasks(val.id)} className={styles.doneBtn}>Done?</button>
              <button onClick={()=> handledelete(val.id)} className={styles.btn}><i className="fa-sharp fa-solid fa-trash" style={{color: "white"}}></i>
              </button>
              </span>
            </div>
            <hr className={styles.hr}/>
          </div>
        ))}
        <div className={styles.done}></div>
        </div>
    </>
  );
}