import React from 'react'

class TodoItem extends React.Component {
    deleteBtnHandler(){
        alert("andar memencet button delete")
    }
    
    btnHandler(type){
        alert(`andar memencet buttin ${type}`)
    }
    render (){
        return(
    <div className= "my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
    {this.props.todoData.activity} ID : {this.props.todoData.id}
     <div>
     <button onClick={()=> this.props.deleteTodoHandler(this.props.todoData.id)} className= "btn btn-danger">Delete</button>
     <button onClick={()=> this.btnHandler("COMPLETED")} className="btn btn-success">Complete</button>
     </div>
   </div>
        )
    }
}

export default TodoItem