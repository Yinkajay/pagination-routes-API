import React from 'react'

const ErrorFallback = ({    error}) => {
    return (
        <>
            <h2>
                Something's not quite right!
            </h2>
            <p>{error.message}</p>
        </>
    )
}

export default ErrorFallback
