import React, { Component } from "react";
import Navbar from '../../components/NavBar'
import TodoList from '../../components/TodoList'
import { Provider } from 'react-redux'
import store from '../../store'
import "./App.css";

class App extends Component {

  state = {
    
  }

  render() {

    return (
        <Provider store={store}>
          <div>
            <Navbar/>
            Mern Template
            <TodoList/>
          </div>
        </Provider>
 
    );
  }
}

export default App;
