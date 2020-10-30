import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {login} from '../rootReducer/authActions'
import { deleteTodo, addTodo } from '../rootReducer/todoActions'

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        addTodo: PropTypes.func.isRequired,
        todos: PropTypes.object.isRequired
    }
    
    handleOnSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state
        const user = { name, email, password }
        this.props.login(user)
        
    }

    handleOnChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    addTodo = (e) => {
        e.preventDefault()
        const {name} = this.state
        this.props.addTodo({name})
    }

    formRef = React.createRef()
    formRef2 = React.createRef()
    render() { 
        return (
            <>
                <div className="container w-25 mt-5">
                    <form onSubmit={this.handleOnSubmit} ref={this.formRef}>
                        <div className="form-group">
                            <input type="email" name="email"  className="form-control mb-2 " placeholder="Email" onChange={this.handleOnChange} />
                            <input type="password" name="password" placeholder='password' onChange={this.handleOnChange}  className="form-control mb-2"/>
                            <button className="btn btn-success btn-sm">login in</button>
                        </div>
                    </form>
                    <form onSubmit={this.addTodo} ref={this.formRef2}>
                        <div className="form-group">
                            <input type="text" name="name" id="" className="form-control" placeholder="Name" onChange={this.handleOnChange} value={this.state.name}/>
                            <button className="btn btn-success btn-sm">Add Todo</button>
                        </div>
                    </form>
                </div>
               
            </>);
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    todos: state.todo
})

export default connect(mapStateToProps, {login, addTodo, deleteTodo})(Login);