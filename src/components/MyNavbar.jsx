import React from "react"
import {connect} from 'react-redux'

class Navbar extends React.Component{
    render(){
        return(
            <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-items-center">
                <h5> Todo List App</h5>
                <h5> You Have {this.props.todoUniState.todoCount} Todo Item(s)</h5>
                
            </div>
        )
    }
}
const mapStateToPropsNav = state=>{
    return{
        todoUniState : state.todo
    }
}
export default connect(mapStateToPropsNav)(Navbar)