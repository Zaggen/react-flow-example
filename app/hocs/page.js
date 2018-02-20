// @flow
import * as React from 'react'
import { compose } from 'recompose'
import withRedux from 'next-redux-wrapper'
import withWrapper from './withWrapper'
import { configureStore } from '../configureStore'
import App from '../index'

const hoc = compose(
  withRedux(configureStore),
  withWrapper(App),
)

function page<EnhancerProps: {}>(
  Component: React.ComponentType<EnhancerProps>,
): React.ComponentType<EnhancerProps> {
  return hoc(Component)
}

export default page
