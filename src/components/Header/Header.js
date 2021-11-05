import logo from "./logo.png"
import "./Header.css"
import React from 'react';
import { withRouter } from "react-router-dom";
function Header(props) {
    function renderLogout() {
        if(props.location.pathname === '/UserScreen'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }

    function handleLogout() {
        props.history.push('/')
    }

    return(
        <header>
        <img className="logo" src={logo} alt="Site Logo" />
        <nav>
            <ul class="nav__links">
            <li>
            <span className="h3">Hey, Welcome to the Balloon-Shop</span> <br/>
            {/* {renderLogout()} */}
                
            </li>
            </ul>
        </nav>
        </header>
    )
}

export default withRouter(Header);