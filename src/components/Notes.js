import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
export default function Notes() {
    const { notes, getNotes, editNote } = useContext(noteContext)
    const [currentNode, setCurrentNote] = useState({ eid: "", etitle: "", edescription: "", etag: "" })
    const refUpdate = useRef(null)
    const refEdit = useRef(null)
    useEffect(() => {
        getNotes()
    }, [])

    const updateNote = (currentNote) => {
        refUpdate.current.click()
        setCurrentNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleEditNoteClick = (e) => {
        refEdit.current.click()
        editNote(currentNode.eid, currentNode.etitle, currentNode.edescription, currentNode.etag)
        document.getElementById('etitle').value = ""
        document.getElementById('edescription').value = ""
        document.getElementById('etag').value = ""
    }
    const onChange = (e) => {
        setCurrentNote({ ...currentNode, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" ref={refUpdate} data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='my-2'>
                                <div className="form-group my-2">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" value={currentNode.etitle} onChange={onChange} id="etitle"
                                        name='etitle' />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="edescription">Description</label>
                                    <input type="text" className="form-control" value={currentNode.edescription} onChange={onChange} id="edescription"
                                        name='edescription' />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" className="form-control" value={currentNode.etag} onChange={onChange} id="etag"
                                        name='etag' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refEdit} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleEditNoteClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container my-3">
                <h1>Your Notes</h1>
                <div className='row'>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })}
                </div>

            </div>
        </>
    )
}
