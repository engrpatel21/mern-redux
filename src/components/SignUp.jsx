import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {signup} from '../rootReducer/authActions'

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: null,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        signup: PropTypes.func.isRequired
    }
    
    handleOnSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state
        const newUser = { name, email, password }
        this.props.signup(newUser)
        
    }

    handleOnChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    formRef = React.createRef()
    render() { 
        return (
            <>
                <div className="container w-25 mt-5">
                    <form onSubmit={this.handleOnSubmit} ref={this.formRef}>
                        <div className="form-group">
                            <input type="text" name="name"  className="form-control mb-2" placeholder="Name" onChange={this.handleOnChange} />
                            <input type="email" name="email"  className="form-control mb-2 " placeholder="Email" onChange={this.handleOnChange} />
                            <input type="password" name="password" placeholder='password' onChange={this.handleOnChange}  className="form-control mb-2"/>
                            <button className="btn btn-success btn-sm">Add Todo</button>
                        </div>
                    </form>
                </div>
            </>);
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, {signup})(SignUp);