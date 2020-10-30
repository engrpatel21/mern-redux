import React, { Component } from 'react'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import { logout } from '../rootReducer/authActions'
import { deleteTodo} from '../rootReducer/todoActions'

class NavBar extends Component {

    handleDelete = () => {
        this.props.deleteTodo(this.props.todo.todos[0]._id)
    }

    render() {
        const { auth, logout} = this.props
        const { isAuthenticated, user } = auth
        return ( 
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav">
                        <li className="nav-item"><a href="/todo" className="nav-link">Todo</a></li>
                        {!isAuthenticated ?    
                          <>    
                          <li className="nav-item"><a href="/login" className="nav-link">Log In</a></li>
                          <li className="nav-item"><a href="/signup" className="nav-link"> Sign Up</a></li>
                          </>
                        : 
                        <li className="nav-item"><a href=" " className="nav-link" onClick={logout}>Log Out</a></li>
                        }

                        <button className="btn btn-danger btn-sm" onClick={this.handleDelete} > Delete Todo</button>
                        
                    </ul>
                </nav>
            </>
        );
    }
}

NavBar.protoTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    todo: state.todo

})

export default connect(mapStateToProps, {logout, deleteTodo} )(NavBar);