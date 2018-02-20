import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title, List, AddButton } from './styled'
import User from './User'
// import type { $User } from '../types'


const Users = props => (
  <Wrapper>
    <Title>User List</Title>
    <AddButton onClick={props.onUserAdd}/>
    <List>
      {props.users.map(u => (
        <User
          key={u.id}
          id={u.id}
          name={u.name}
          onRemove={props.onUserRemove}
        />
      ))}
    </List>
  </Wrapper>
)

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onUserAdd: PropTypes.func.isRequired,
  onUserRemove: PropTypes.func.isRequired,
}


export default Users

