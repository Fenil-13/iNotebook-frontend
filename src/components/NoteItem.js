import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function NoteItem(props) {
    const { note, updateNote } = props
    const { deleteNote } = useContext(noteContext)
    return (
        <>
            <div className="col-md-3 my-3">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                        <p className="card-text">{note.description}</p>
                        <div className="d-flex justify-content-between">
                            <i className="far fa-edit" onClick={() => {
                                updateNote(note)
                            }}></i>
                            <i className="fas fa-trash-alt" onClick={() => { deleteNote(note._id) }}></i>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
