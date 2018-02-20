// @flow
import * as React from 'react'
import { injectAsyncReducer } from '../configureStore'
import isServer from 'utils/isServer'


function withReducer(path: string, reducer: Function): Function {
  let injectedReducer = false
  return (Component: Function) => {
    const withReducerComponent = (props: any) => {
      if (isServer() || !injectedReducer) {
        injectAsyncReducer(path, reducer)
        injectedReducer = true
      }
      return <Component {...props} />
    }
    withReducerComponent.getInitialProps = Component.getInitialProps
    return withReducerComponent
  }
}

export default withReducer
