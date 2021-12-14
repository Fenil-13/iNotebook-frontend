import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

export default function Notes() {
    const { notes, addNote } = useContext(noteContext)
    return (
        <>
            <AddNote />
            <hr />
            <div className="container my-3">
                <h1>Your Notes</h1>
                <div className='row'>
                    {notes.map((note) => {
                        return <NoteItem key={note.id} note={note} />
                    })}
                </div>

            </div>
        </>
    )
}
