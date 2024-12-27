// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const form = ({setTodo, Len}) => {
    var itemtoAdd = ""
    const formHandling = (e)=> {
        e.preventDefault()
        itemtoAdd = e.target.firstChild.value 
        if(itemtoAdd !== "") {
            setTodo(state => [...state, {id:Len,todo:itemtoAdd}])
        }
        e.target.firstChild.value = ""
    }
  return (
    <div className="Form-container">
        <form onSubmit={formHandling}>
            <input type="text" placeholder='write a task...'/>
            <button type="submit">add</button>
        </form>
    </div>
  )
}

export default form