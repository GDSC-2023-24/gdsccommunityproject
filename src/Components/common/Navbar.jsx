import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="center-content">
                <img src="/images/gdsclogo1.png" alt="Logo" className="gdsclogo" />
                <h1 className="navbar-text">GDSC</h1>
            </div>
            
        </nav>
    );
}

export default Navbar;

