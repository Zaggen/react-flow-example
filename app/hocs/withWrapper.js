import * as React from 'react'


function withWrapper(WrapperComponent: React.ReactClass) {
  return (Component: React.ReactClass) => {
    const withWrapperComponent = (props) => (
      <WrapperComponent>
        <Component {...props} />
      </WrapperComponent>
    )
    withWrapperComponent.getInitialProps = WrapperComponent.getInitialProps
    return withWrapperComponent
  }
}

export default withWrapper
