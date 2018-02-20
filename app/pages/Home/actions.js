// @flow
import type { $User } from './types'
import createAction from 'utils/createAction'


export const fetchUsers = () => ({
  type: ('FETCH_USERS': 'FETCH_USERS'),
})

export const fetchUsersSuccess = (users: $User[]) => ({
  type: ('FETCH_USERS_SUCCESS': 'FETCH_USERS_SUCCESS'),
  payload: { users }
})

export const addUser = (user: $User) => ({
  type: ('ADD_USER': 'ADD_USER'),
  payload: { user }
})

// With create action helper
export const removeUser = (user: $User) =>
  createAction(('REMOVE_USER': 'REMOVE_USER'), { user })


// Types exports

const actions = { fetchUsers, fetchUsersSuccess, addUser, removeUser }

export type $UserActionTypes = $ExtractActionTypes<typeof actions>
export type $UserActions = $ExtractActions<typeof actions>
