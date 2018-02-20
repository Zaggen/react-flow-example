// @flow
import React from 'react'
import { Wrapper, Title, List, AddButton } from './styled'
import User from './User'
import type { $User } from '../types'


type Props = {|
  users: $User[],
  onUserAdd: Function,
  onUserRemove: Function,
|}

const Users = (props: Props) => (
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


export default Users

