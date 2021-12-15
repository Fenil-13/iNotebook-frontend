import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const host = "http://localhost:1353"
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.confirmpassword) {
            alert("Password and Confirm password are diffrent")
            document.getElementById('password').value = ""
            document.getElementById('confirmpassword').value = ""
            return
        }
        console.log(credentials)
        let response = await fetch(`${host}/api/auth/create_user`, {
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
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="name" className="form-control" name="name" onChange={onChange} minLength={6} required id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={onChange} minLength={6} required id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name='password' id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} name='confirmpassword' id="confirmpassword" />
                </div>
                <button disabled={credentials.name.length <= 0 || credentials.password.length <= 5 || credentials.confirmpassword.length <= 5} type="submit" className="btn btn-primary" >Sign Up</button>
            </form>
        </>
    )
}
