import React from 'react'

export default function NoteItem(props) {
    const { _id, title, description, tag, user, date } = props.note

    return (
        <>
            <div className="col-md-3 my-3">



                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between">
                            <i className="far fa-edit"></i>
                            <i className="fas fa-trash-alt"></i>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
