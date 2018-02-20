// import type { $User } from './types'
// import type { $UserActions } from './actions'


// export type $State = $User[]

function usersReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_USERS_SUCCESS': {
      return action.payload.users
    }
    case 'ADD_USER': {
      return state.concat([action.payload.user])
    }
    case 'REMOVE_USER': {
      const userId = action.payload.user.id
      return state.filter(u => u.id === userId)
    }
    default:
      return state
  }
}

export default usersReducer
