import React from 'react'

class TodoItem extends React.Component {
    // deleteBtnHandler(){
    //     alert("anda memencet button delete")
    // }
    
    // btnHandler(type){
    //     alert(`anda memencet buttin ${type}`)
    // }

    // componentWillUnmount(){
    //     alert("UNMOUNT")
    // }
    render (){
        return(
    <div className= "my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
    {this.props.todoData.activity} ID : {this.props.todoData.id}
     <div>
     <button onClick={()=> this.props.deleteTodoHandler(this.props.todoData.id)} className= "btn btn-danger">Delete</button>
     <button 
     disabled={this.props.todoData.isFinish} 
     onClick={()=> this.props.completeTodoHandler(this.props.todoData.id)} 
     className="btn btn-success">
       { //if ternary
           this.props.todoData.isFinish ? <strong>Finish</strong> : <em>Complete </em>
       }
         </button>
     </div>
   </div>
        )
    }
}

export default TodoItem