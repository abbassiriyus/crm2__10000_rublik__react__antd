import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">AbcCRM</Link>
            </div>
        </div>
    )
}
export default Header
