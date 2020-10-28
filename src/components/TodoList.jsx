import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getTodos} from '../rootReducer/todoActions'
import todoReducer from '../rootReducer/todoReducer'
import PropTypes from 'prop-types'


class TodoList extends Component {
 

    componentDidMount() {
        this.props.getTodos();
    }

    handleOnChange = e => {
        const todoData = { ...this.state.todoData, [e.target.name]: e.target.value }
        todoData.id = this.state.todos[this.state.todos.length - 1].id + 1
        this.setState({ todoData: todoData })

    }

    handleOnSubmit = e => {
        e.preventDefault()
  
    
    }

    handleDelete = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
    }

    formRef = React.createRef()
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={this.handleOnSubmit} ref={this.formRef}>
                            <div className="form-group">
                                <input type="text" name="name" id="" className="form-control" placeholder="Name" onChange={this.handleOnChange}/>
                                <button className="btn btn-success btn-sm">Add Todo</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <ul className="list-group">
                        <li className="list-group-item active">Todo List</li>
                        {/* {this.state.todos.map(todo => {
                            return <li className="list-group-item" key={todo.id}>{todo.name} <button className="btn btn-danger btn-sm right" onClick={()=>{this.handleDelete(todo.id)}} >X</button></li>
                        })}
                         */}
                        </ul>                        
                    </div>
                </div>
               

            </div>
        );
    }
}

TodoList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, {getTodos})(TodoList);

