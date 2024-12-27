import React from "react";

import { FaTrashAlt } from "react-icons/fa";



const List = ({todoList,setTodo}) => {
   

 const displayList = () => {
        return (
            <div>
                {
                 todoList.map(item => {
                    return (
                        <div className="task-item">
                           <li>{item.todo} <button onClick={() =>     setTodo(todoList.filter(i => i.id !== item.id))}><FaTrashAlt /></button></li>
                        </div>
                    )
                 })
                 }
            </div>
        )
    }
    return(
        <div className="list-container">
            <ul>
               {displayList()}
            </ul>
        </div>
    )
}
export default List;