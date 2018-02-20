/* global process, window */
import * as React from 'react'
import { sagaMiddleware } from '../configureStore'
import isServer from 'utils/isServer'


const browserDevMode = process.env.NODE_ENV === 'development' && !isServer()
if (browserDevMode) {
  // On dev mode, when changing pages, next.js will build new bundles and reset this code
  // so we track the currently running sagas with a global, to avoid rerunning them.
  window.runningSagas = window.runningSagas || []
}

function withSagas(saga) {
  let isSagaRunning = false
  return (Component) => {
    const withSagasComponent = (props) => {
      // start saga monitor for client side check whether clientTask is running
      if (!Component.isServerContext && !isSagaRunning) {
        if (browserDevMode && !window.runningSagas.includes(saga.toString())) {
          window.runningSagas.push(saga.toString())
          sagaMiddleware.run(saga)
        } else if (!browserDevMode) {
          sagaMiddleware.run(saga)
        }
        isSagaRunning = true
      }
      return <Component {...props} />
    }
    withSagasComponent.getInitialProps = Component.getInitialProps
    return withSagasComponent
  }
}

export default withSagas
