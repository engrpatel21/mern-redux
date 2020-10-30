import React, { Component } from "react";
import Navbar from '../../components/NavBar'
import TodoList from '../../components/TodoList'
import { Provider } from 'react-redux'
import store from '../../store'
import "./App.css";
import {loadUser} from '../../rootReducer/authActions'
import {Route} from 'react-router-dom'
import SignUp from "../../components/SignUp";
import LogIn from "../../components/LogIn";

class App extends Component {
  
  // componentDidMount() {
  //   store.dispatch(loadUser())
  // }

  render() {
    
    return (
        <Provider store={store}>
          <div>
          <Navbar />
            <Route exact path='/todo' render={()=> <TodoList/>} />
            <Route exact path='/signup' render={() => <SignUp />} />
            <Route exact path='/login' render={()=> <LogIn/>} />
          </div>
        </Provider>
 
    );
  }
}

export default App;
