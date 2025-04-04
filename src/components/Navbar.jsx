import { Link } from "react-router";
import React from "react";

function Navbar () {
    return ( <>
    
    <nav>
        <ul>

            <Link to= "/">Home</Link>
            <Link to= "/about">About</Link>
            <Link to= "/contact">Contact</Link>
            <Link to= "/login">Login</Link>


        </ul>
    </nav>
    
    
    
    </> );
}

export default Navbar ;