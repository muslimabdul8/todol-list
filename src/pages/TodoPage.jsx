import React from 'react';
import Axios from 'axios'
import "../styles.css"
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from '../components/Todoitems';
import { connect } from 'react-redux'
import {
        changeTodoCount,
        incrementTodoCount,
        fetchTodoGlobal,
        decrementTodoCount,}
         from '../redux/actions/todo'



class TodoPage extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };
  
    fetchTodo = ()=>{
      Axios.get("http://localhost:2000/todo")
      .then((response)=>{
        console.log(response.data);
        this.setState({todoList: response.data})
        this.props.changeTodo(response.data.length)
      })
      .catch((err)=>{
        alert("Terjadi Kesalahan")
      })
  
    }
  
    deleteTodo = (id)=>{
      Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(()=>{
        alert("Delete Berhasil")
        this.props.fetchTodoGlobal()
      })
    }
  
  
    completeTodo =(id)=>{
      Axios.patch(`http://localhost:2000/todo/${id}`,{
        isFinish : true,
          })
      .then(()=>{
        alert("Berhasil complete todo!")
        this.props.fetchTodoGlobal()
      })
      .catch((err)=>{
        alert("Terjadi Kesalahan")
      })
    }
  
  
    
  renderTodoList = ()=>{
    return this.props.todoGlobalState.todoList.map((val)=> {
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
      this.props.fetchTodoGlobal()
    })
    .catch((err)=>{
      alert("Terjadi Kesalahan")
    })
  }
  
    
  
  inputHandler = (event)=>{
    this.setState({inputTodo: event.target.value})
  }
  
  componentDidMount(){
    this.props.fetchTodoGlobal();
  }
  
  


    render(){
    return (
      <div className="container mt-3">
     <button onClick={this.fetchTodo} className ="btn btn-info">
       Get My Todo List {this.props.todoGlobalState.todoCount}
       </button>
     {this.renderTodoList()}
     <div className="mt-3">
       <input onChange={this.inputHandler} type="text" className="mx-3" />
       <button onClick={this.addTodo} className="btn btn-primary">
        Add Todo
        </button>
        <button onClick={this.props.incrementTodo} className="btn btn-warning mx-3">
          Increment Todo
        </button>
        <button onClick={this.props.decrementTodo} className="btn btn-primary" >
          Decrement Todo
        </button>
        <button  onClick={()=> this.props.changeTodo(7)} className="btn btn-dark">
          Changes Todo
        </button>
     </div>
      </div>
    );
    }
  }

  const mapStateToProps = (state)=>{
    return{
      testingProps :0,
      todoGlobalState: state.todo,
      
    }
  }

  const mapDispatchToProps = {
    incrementTodo:incrementTodoCount,
    decrementTodo:decrementTodoCount,
    changeTodo:changeTodoCount,
    fetchTodoGlobal,
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TodoPage);
  