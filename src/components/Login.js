import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const host = "http://localhost:1353"
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch(`${host}/api/auth/login_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        if (response.status === 200) {
            response = await response.json()
            localStorage.setItem('authToken', response.authToken)
            navigate('/');
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };


    return (
        <>
            <div className="container text-center"></div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name='password' id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>
    )
}
