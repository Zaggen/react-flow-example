/* global process */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { merge, zipObjectDeep } from 'lodash'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { createReducer } from 'utils/createReducer'
import mainReducers from './reducers'
import mainSagas from './sagas'
import isServer from 'utils/isServer'

export const sagaMiddleware = createSagaMiddleware()

const browserDevMode = process.env.NODE_ENV === 'development' && !isServer()
let store

if (browserDevMode) {
  store = window.__store__ || window.__NEXT_REDUX_STORE__// eslint-disable-line
}

export function configureStore(initialState = {}) {
  const rootReducer = combineReducers(mainReducers)
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        (browserDevMode)
          ? logger
          : () => next => action => next(action),
        sagaMiddleware,
      ),
      !isServer() && window.devToolsExtension
        ? window.devToolsExtension()
        : fn => fn,
    ),
  )
  store.asyncReducers = merge({}, mainReducers)
  sagaMiddleware.run(mainSagas)

  if (browserDevMode) {
    window.__store__ = store // eslint-disable-line
  }
  return store
}

export function injectAsyncReducer(path, asyncReducer) {
  merge(store.asyncReducers, zipObjectDeep([path], [asyncReducer]))
  const reducer = createReducer(store.asyncReducers)
  store.replaceReducer(reducer)
}
