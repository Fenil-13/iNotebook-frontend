import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const noteInitial = [
        {
            "_id": "61b82f14f68e7ebb22477183",
            "title": "My Note1",
            "description": "This note for deno 1",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        },
        {
            "_id": "61b82f14f68e7ebb22477182",
            "title": "My Note2",
            "description": "This note for deno 2",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        },
        {
            "_id": "61b82f14f68e7ebb2247718r",
            "title": "My Note1",
            "description": "This note for deno 1",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        },
        {
            "_id": "61b82f14f68e7ebb2247718b",
            "title": "My Note2",
            "description": "This note for deno 2",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        },
        {
            "_id": "61b82f14f68e7ebb2247718d",
            "title": "My Note1",
            "description": "This note for deno 1",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        },
        {
            "_id": "61b82f14f68e7ebb2247718s",
            "title": "My Note2",
            "description": "This note for deno 2",
            "tag": "Funny",
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        }
    ]


    const [notes, setNotes] = useState(noteInitial)

    const addNote = (title, description, tag) => {
        const note = {
            "_id": "61b82f14f68e7ebb22477183",
            "title": title,
            "description": description,
            "tag": tag,
            "user": "61b82eebf68e7ebb2247717e",
            "date": "2021-12-14T05:43:48.834Z"
        }
        setNotes(notes.concat(note))

    }


    const deleteNote = () => {

    }


    const updateNote = () => {

    }


    return (
        <noteContext.Provider value={{ notes, addNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState