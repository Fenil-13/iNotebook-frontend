import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:1353"

    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/get_notes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiODJlZWJmNjhlN2ViYjIyNDc3MTdlIn0sImlhdCI6MTYzOTQ2MDU4N30.eZUwaiRUzP3N8K7G8IlgM5AYlNCQNP5jk0c7GKzNnDQ'
            }
        });
        setNotes(await response.json())
    }
    const addNote = async (title, description, tag) => {
        const sendData = {
            "title": title,
            "description": description,
            "tag": tag
        }
        if (sendData.tag === '') {
            sendData.tag = "General"
        }

        const response = await fetch(`${host}/api/notes/create_note`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiODJlZWJmNjhlN2ViYjIyNDc3MTdlIn0sImlhdCI6MTYzOTQ2MDU4N30.eZUwaiRUzP3N8K7G8IlgM5AYlNCQNP5jk0c7GKzNnDQ'
            },
            body: JSON.stringify(sendData)
        });
        if (response.status === 200) {
            getNotes()
        } else {

        }


    }


    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/delete_note/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiODJlZWJmNjhlN2ViYjIyNDc3MTdlIn0sImlhdCI6MTYzOTQ2MDU4N30.eZUwaiRUzP3N8K7G8IlgM5AYlNCQNP5jk0c7GKzNnDQ'
            }
        });
        if (response.status === 200) {
            const newItem = notes.filter((note) => { return note._id !== id })
            setNotes(newItem)
        }
    }


    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/update_note/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiODJlZWJmNjhlN2ViYjIyNDc3MTdlIn0sImlhdCI6MTYzOTQ2MDU4N30.eZUwaiRUzP3N8K7G8IlgM5AYlNCQNP5jk0c7GKzNnDQ'
            },
            body: JSON.stringify({ title: title, description: description, tag: tag })
        });
        if (response.status === 200) {
            getNotes()
        }
    }


    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState