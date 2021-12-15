import React from 'react'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const { showAlert } = props
    const navigate = useNavigate()
    if (!localStorage.getItem('authToken')) {
        navigate('/login')
    }
    console.log()
    return (
        <div>
            <Notes showAlert={showAlert} />
        </div>
    )
}
