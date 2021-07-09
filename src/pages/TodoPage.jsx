import React from 'react';
import Axios from 'axios'
import "../styles.css"
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from '../components/Todoitems';




class TodoPage extends React.Component {
    state = {
      todoList : [],
      inputTodo : "",
    }
  
    fetchTodo = ()=>{
      Axios.get("http://localhost:2000/todo")
      .then((response)=>{
        console.log(response.data);
        this.setState({todoList: response.data})
      })
      .catch((err)=>{
        alert("Terjadi Kesalahan")
      })
  
    }
  
    deleteTodo = (id)=>{
      Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(()=>{
        alert("Delete Berhasil")
        this.fetchTodo()
      })
    }
  
  
    completeTodo =(id)=>{
      Axios.patch(`http://localhost:2000/todo/${id}`,{
        isFinish : true,
          })
      .then(()=>{
        alert("Berhasil complete todo!")
        this.fetchTodo()
      })
      .catch((err)=>{
        alert("Terjadi Kesalahan")
      })
    }
  
  
    
  renderTodoList = ()=>{
    return this.state.todoList.map((val)=> {
      return(
        <TodoItem completeTodoHandler={this.completeTodo} 
        deleteTodoHandler={this.deleteTodo} 
        todoData={val}/>
      )
    })
  }
  addTodo =()=>{
  
    Axios.post("http://localhost:2000/todo",{
      activity: this.state.inputTodo,
      isFinish: false,
    })
    .then(()=>{
      alert("berhasil add Todo")
      this.fetchTodo()
    })
    .catch((err)=>{
      alert("Terjadi Kesalahan")
    })
  }
  
    
  
  inputHandler = (event)=>{
    this.setState({inputTodo: event.target.value})
  }
  
  // componentDidUpdate(event){
  //   this.setState({inputTodo:event.target.value})
  // }
  componentDidMount(){
    this.fetchTodo()
  }
  
  
    render(){
      // alert("RENDER")
    return (
      <div className="container mt-3">
     <button onClick={this.fetchTodo} className ="btn btn-info">Get My Todo List</button>
     {this.renderTodoList()}
     <div className="mt-3">
       <input onChange={this.inputHandler} type="text" className="mx-3" />
       <button onClick={this.addTodo} className="btn btn-primary">
        Add Todo
        </button>
     </div>
      </div>
    );
    }
  }
  
  export default TodoPage;
  