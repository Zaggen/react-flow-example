// @flow
import { put, call, takeLatest } from 'redux-saga/effects'
import type { Saga } from 'redux-saga';
import * as API from 'common/apiClient'
import { setUsersListSuccess, type $UserActionTypes } from './actions'


const watchers = [
  function* fetchUsers(): Saga<*> {
    yield takeLatest(
      ('FETCH_USERS': $UserActionTypes),
      fetchUsersSaga
    )
  }
]

function* fetchUsersSaga(): Saga<void> {
  try {
    const users = yield call(API.fetchUsers)
    yield put(setUsersListSuccess(users))
  } catch (err) {
    console.log(err)
  }
}


export default watchers
