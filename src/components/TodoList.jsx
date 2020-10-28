import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getTodos, deleteTodo, addTodo} from '../rootReducer/todoActions'
import PropTypes from 'prop-types'


class TodoList extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        this.props.getTodos();
    }

    handleOnChange = e => {
       
        this.setState({ [e.target.name] : e.target.value })
        console.log(this.state)

    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
    }

    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }

    formRef = React.createRef()
    render() {
        const {todos} = this.props.todo
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
                        {todos.map(todo => {
                            return <li className="list-group-item" key={todo._id}>{todo.name} <button className="btn btn-danger btn-sm right" onClick={()=>{this.handleDelete(todo._id)}} >X</button></li>
                        })}
                        
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

export default connect(mapStateToProps, {getTodos, deleteTodo, addTodo})(TodoList);

