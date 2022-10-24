import React, { useCallback, useEffect, useState } from 'react'
import Member from './Member';

const Members = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1)
  const membersPerPage = 6;



  const getMembers = useCallback(() => {
    fetch('https://randomuser.me/api/?results=5')
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
      <div>
        {!isLoading && <div style={{ border: '2px solid blue' }}>
          {members.map(member => (
            <Member 
            key = {member.cell}
            src = {member.thumbnail}
            firstName = {member.firstName}
            lastName = {member.lastName}
            country = {member.country}
            email = {member.email}
            />
          ))
          }
        </div>}
        {isLoading && 'Loading...'}
      </div>
    </>
  )
}

export default Members;
