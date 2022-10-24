import React from 'react'
import styles from './User.module.css'

const User = (props) => {
    return (
        <div className={styles['member-card']}>
            <img src={props.src} className={styles['member-picture']} />
            <h2 className={styles['member-name']} > Name  -  {props.firstName} {props.lastName}</h2>
            <h3 className={styles['member-country']}>Country of Origin    -  {props.country} </h3>
            <h3 className={styles['member-email']}>E-mail  -  {props.email}</h3>
        </div>
    )
}

export default User


{/* <Member
key={member.id}
firstName={member.firstName}
lastName={member.lastName}
country={member.country}
email={member.email}
src={member.thumbnail}
/> */}
// members.slice((page - 1) * membersPerPage, page * membersPerPage)