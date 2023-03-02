import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    
    return(
            <div className='navbar'>
                <div className="nav-name">POC LOGO</div>
                <ul className="nav-menu">
                    <li><Link className="nav-list" to={"/form"}>Login</Link></li>
                    <li><Link className="nav-list" to={"/contact"}>Public API</Link></li>
                    <li><Link className="nav-list" to={"/kendo"}>Kendo</Link></li>
                    <li><Link className="nav-list" to={"/parent"}>UseContext</Link></li>
                </ul>
            </div>
    );
}
export default Navbar

