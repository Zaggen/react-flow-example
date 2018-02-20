// @flow
import * as React from 'react'
import 'babel-polyfill'
import { compose, pure } from 'recompose'


type Props = {
  children: React.Node,
}

const App = (props: Props) => (
  <div id="#app">
    {props.children}
  </div>
)

export default compose(
  pure,
)(App)
