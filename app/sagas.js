// @flow
import { all } from 'redux-saga/effects'
import sagas from './pages/Home/sagas'

// single entry point to start all Sagas at once
export default function* saga() {
  yield all(sagas.map(watcher => watcher()))
}
