// @flow
import * as React from 'react'


function withDebugger(Component: any | Function) {
  return (props: Object) => {
    console.log('----------DEBUGGING COMPONENT PROPS-----------') // eslint-disable-line
    debugger // eslint-disable-line
    return <Component {...props} />
  }
}

export default withDebugger
