// @flow
import * as React from 'react'


function withGetInitialProps(getInitialProps: Function) {
  return (Component: any) => {
    const WithInitialProps = (props: Object) => (
      <Component {...props} />
    )
    WithInitialProps.getInitialProps = async function(props: Object) {
      await getInitialProps(props)
      if (Component.getInitialProps) {
        await Component.getInitialProps(props)
      }
    }
    return WithInitialProps
  }
}

export default withGetInitialProps
