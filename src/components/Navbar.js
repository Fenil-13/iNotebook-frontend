import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();
    const navigate = useNavigate()
    const logoutUser = () => {
        localStorage.removeItem('authToken')
        navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {
                            localStorage.getItem('authToken') ?
                                <button type="button" onClick={logoutUser} className="btn btn-primary btn-sm mx-2">Logout</button> :
                                <form className="d-flex">
                                    <Link type="button" to="/login" className="btn btn-primary btn-sm mx-2">Login</Link>
                                    <Link type="button" to="/signup" className="btn btn-secondary btn-sm mx-2">Sign Up</Link>
                                </form>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}
