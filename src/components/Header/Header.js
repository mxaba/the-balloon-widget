import logo from "./logo.png"
import "./Header.css"
import React from 'react';
import { withRouter } from "react-router-dom";
function Header(props) {
    return(
        <header>
        <img className="logo" src={logo} alt="Site Logo" />
        <nav>
            <ul className="nav__links">
            <li>
            <span className="h3">Hey, Welcome to the 🎈Balloon-Shop</span> <br/>
            {/* {renderLogout()} */}
                
            </li>
            </ul>
        </nav>
        </header>
    )
}

export default withRouter(Header);