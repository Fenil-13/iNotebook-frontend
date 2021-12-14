import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-success my-3 mx-2" role="alert">
                {props.message}
            </div>
        </div>
    )
}
