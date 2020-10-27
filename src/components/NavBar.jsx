import React, { Component } from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav">
                        <li className="nav-item"><a href="" className="nav-link">Add Todo</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Todo</a></li>
                    </ul>
                </nav>
            </>
         );
    }
}
 
export default NavBar;