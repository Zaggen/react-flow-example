// @flow
import usersReducer, { type $State } from './pages/Home/reducer'

export type $StateTree = {
  users: $State
}

// Note that this needs to be a hash not a combinedReducers fn
const reducersHash = {
  users: usersReducer,
}

export default reducersHash
