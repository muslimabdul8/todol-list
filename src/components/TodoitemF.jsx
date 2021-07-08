import React from 'react'

const TodoItemF= (props)=>{

const deleteBtnHandler = () =>{
    alert('Anda Klik delete')
}

const btnHandler = (type) =>{
    alert(`anda klik ${type}`)
}

    return(
        <div className= "my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
        {props.todoData.activity} ID : {props.todoData.id}
        <div>
        <button onClick={deleteBtnHandler} className= "btn btn-danger">Delete</button>
        <button onClick={()=> btnHandler("COMPLETED")} className="btn btn-success">Complete</button>
        </div>
      </div>
    )
}
export default TodoItemF

