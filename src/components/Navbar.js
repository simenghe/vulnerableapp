import React from "react"
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Sadness</Link>
                <SignedInLinks/>
            </div>
        </nav>
    )
}
export default Navbar;