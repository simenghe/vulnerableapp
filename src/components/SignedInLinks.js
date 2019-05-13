import React from "react"
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
    return (
        <uL className="right">
            <li><NavLink to='/'>New Booking</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className = 'btn btn-floating red lighten-1'></NavLink>NN</li>            
        </uL>
    )
}
export default SignInLinks;