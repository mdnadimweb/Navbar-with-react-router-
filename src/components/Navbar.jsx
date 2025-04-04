import {NavLink} from "react-router";
import React from "react";

function Navbar () {
    return ( <>
    
    <nav>
        <ul>

            <NavLink to= "/">Home</NavLink>
            <NavLink to= "/about">About</NavLink>
            <NavLink to= "/contact">Contact</NavLink>
            <NavLink to= "/login">Login</NavLink>

        </ul>
    </nav>
    
    
    
    </> );
}

export default Navbar ;