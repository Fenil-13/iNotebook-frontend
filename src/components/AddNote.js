import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
export default function AddNote() {
    const { addNote } = useContext(noteContext)
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleAddNoteClick = (e) => {
        e.preventDefault()
        document.getElementById('title').value = ""
        document.getElementById('description').value = ""
        document.getElementById('tag').value = ""
        addNote(note.title, note.description, note.tag)
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-3">
                <h1>Add Note</h1>
                <form className='my-3'>
                    <div className="form-group my-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title"
                            name='title' onChange={onChange} required minLength={5} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description"
                            name='description' onChange={onChange} required minLength={5} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag"
                            name='tag' onChange={onChange} />
                    </div>

                    <button disabled={
                        note.title.length < 5 ||
                        note.description.length < 5
                    } type="submit" className="btn btn-primary my-3" onClick={handleAddNoteClick}>Submit</button>
                </form>
            </div>
        </>
    )
}
