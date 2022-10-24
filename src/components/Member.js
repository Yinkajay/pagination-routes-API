import React from 'react'
import styles from './Member.module.css'

const Member = (props) => {
    return (
        <div className='member-card'>
            <h1>Hi</h1>
            <img src={props.src} />
            <h2>{props.firstName} {props.lastName}</h2>
            <h3>{props.country}</h3>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Member


{/* <Member
key={member.id}
firstName={member.firstName}
lastName={member.lastName}
country={member.country}
email={member.email}
src={member.thumbnail}
/> */}