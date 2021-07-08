import logo from './logo.svg';
import './App.css';
import "./styles.css"
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from './components/Todoitems';
import TodoItemF from './components/TodoitemF';
import React from 'react';

class App extends React.Component {
  state = {
    todoList : [
      {activity :"makan", id : 1},
      {activity :"mandi", id : 2},
      {activity :"coding", id : 3},
    ],
    inputTodo : "",
  }

  deleteTodo = (id)=>{
    this.setState({
      todoList: this.state.todoList.filter((val)=>{
        return val.id !== id
      })
    }
    )
  }
  
renderTodoList = ()=>{
  return this.state.todoList.map((val)=> {
    return(
      <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val}/>
    )
  })
}
addTodo =()=>{
  this.setState(
    {
      todoList : [
        ...this.state.todoList,
        {activity: this.state.inputTodo, id : this.state.todoList.length + 1}
      ]
    }
  )
}


inputHandler = (event)=>{
  this.setState({inputTodo: event.target.value})
}

  render(){
  return (
    <div>
   <h1>Todo List</h1>
   {this.renderTodoList()}
   <div>
     <input onChange={this.inputHandler} type="text" className="mx-3" />
     <button onClick={this.addTodo} className="btn btn-primary"> Add Todo</button>
   </div>
    </div>
  );
  }
}

export default App;
