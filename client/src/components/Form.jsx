import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [inputText,setInputText]=useState("");

    const submitHandler =(e) =>{
        e.preventDefault();
        
    }
  return (
      <form>
      <input type="text" className="todo-input"
      value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className="todo-button" type="submit" 
      onClick={submitHandler} >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      {inputText}
    </form>
  )
}

export default Form