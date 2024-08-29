import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import styles from "./doneTasks.module.css"

export default function DoneTasks() {
    const {todoList, setTodoList} = useContext(TodoContext);

    const doneTasks = todoList.filter(val => val.done === true)

    
    function clearAll(){
      setTodoList(todoList.filter(todo => todo.done === false))
    }
    
    let listStyle = doneTasks.length ? styles.list : ""; 

     if(doneTasks.length){
        return(
            <>
            <div className={listStyle}>
              <div className={styles.doneTaskHead}>
            <h3 className={styles.heading}>Tasks Done : <span>{doneTasks.length} </span></h3> 
            <div>
            <span onClick={clearAll} className={styles.clear}>Clear All</span>
            </div>
              </div>
            {/* <hr className={styles.hr}/> */}
            {doneTasks.map((val) => (
              <div key={val.id} className={styles.todo}>
                <div className={styles.textCont}> 
                <span><i className="fa-sharp fa-solid fa-circle-check" style={{color: "#20002c"}}></i></span>
                <h3 className={styles.text} key={val.id}>{val.name}</h3>
                </div>
                <hr className={styles.hr}/>
              </div>
            ))}
            </div>
        </>
        )
     }

    
}