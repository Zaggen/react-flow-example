// @flow
import * as React from 'react'
import { UserWrapper, RemoveBtn } from './styled'


type Props = {|
  id: number,
  name: string,
  onRemove: Function,
|}

class User extends React.PureComponent<Props> {
  handleRemove = (ev: SyntheticEvent<HTMLButtonElement>) => {
    ev.stopPropagation() // just as an example
    this.props.onRemove(this.props.id)
  }
  
  render() {
    return (
      <UserWrapper>
        {this.props.name}
        <RemoveBtn onClick={this.handleRemove} />
      </UserWrapper>
    )
  }
}

export default User
