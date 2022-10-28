import React, { useCallback, useEffect, useState } from 'react'
import Member from './User';
import styles from './Users.module.css'

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1)
  const membersPerPage = 6;



  const getMembers = useCallback(() => {
    fetch('https://randomuser.me/api/?page=3&results=19&seed=abc')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        const transformedMembers = data.results.map(member => {
          return {
            cell: member.cell,
            firstName: member.name['first'],
            lastName: member.name['last'],
            country: member.location.country,
            email: member['email'],
            thumbnail: member.picture.thumbnail
          }
        })
        console.log(transformedMembers);
        setMembers(transformedMembers)
        setIsLoading(false)
      })
  })

  useEffect(() => {
    getMembers()
  }, [])

  // const foundMembers = (props) => {
  //   return (
  //     <ul>
  //       {props.members.map(member => {
  //         <Member
  //           id={member.cell}
  //           firstName={member.firstName}
  //           lastName={member.lastName}
  //           country={member.country}
  //           email={member.email}
  //         />
  //       })}
  //     </ul>
  //   )
  // }

  // console.log(members);

  return (
    <>
      <h1>These are our members</h1>
      {isLoading && 'Loading...'}
      {!isLoading && <div style={{ border: '2px solid transparent' }}>
        <div className={styles['member-area']}>
          {members.slice((page - 1) * membersPerPage, page * membersPerPage).map(member => (
            <Member
              key={member.cell}
              src={member.thumbnail}
              firstName={member.firstName}
              lastName={member.lastName}
              country={member.country}
              email={member.email}
            />
          ))
          }
        </div>
      </div>}{!isLoading &&
        <div className={styles['button-area']}>
          <button className={`${styles.button} ${styles['button-prev']} `} onClick={() => setPage((p) => p - 1)} disabled={page <= 1}>
            Previous
          </button>
          {Array.from({ length: Math.ceil(members.length / membersPerPage) }, (value, index) => index + 1).map(
            (each) => (
              <button className={styles.button} onClick={() => setPage(each)}>{each}</button>
            )
          )}
          <button className={`${styles.button} ${styles['button-next']} `} onClick={() => setPage((p) => p + 1)} disabled={page >= (members.length / membersPerPage)}>
            Next
          </button>
        </div>
      }
    </>
  )
}

export default Users;
