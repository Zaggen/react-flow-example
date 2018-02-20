import createAction from 'utils/createAction'


export const fetchUsers = () => ({
  type: 'FETCH_USERS',
})

export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: { users }
})

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: { user }
})

// With create action helper
export const removeUser = (user: $User) =>
  createAction('REMOVE_USER', { user })

/*
const actions = { setUsersList, setUsersListSuccess, addUser, removeUser }

export type $UserActionTypes = $ExtractActionTypes<typeof actions>
export type $UserActions = $ExtractActions<typeof actions>
*/
