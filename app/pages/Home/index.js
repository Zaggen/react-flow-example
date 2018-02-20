// @flow
import React from 'react'
import { compose, pure, type HOC } from 'recompose'
import { connect } from 'react-redux'
import page from 'hocs/page'
import { Wrapper, Title } from './styled'
import Users from './Users'
import { fetchUsers, addUser, removeUser } from './actions'
import { selectUsers } from './selectors'

/*
const HomePage = props => (
  <Wrapper>
    <Title>React App + Flow</Title>
    <Users
      users={props.users}
      onUserAdd={props.addUser}
      onUserRemove={props.removeUser}
    />
  </Wrapper>
)*/


// Example with class based component (Connected)
class HomePage<P: *> extends React.PureComponent<P> {
  componentWillMount() { // lifecycle HOC does not work with recompose+flow but is ok on classes
    this.props.fetchUsers()
  }
  
  render() {
    return (
      <Wrapper>
        <Title>React App + Flow</Title>
        <Users
          users={this.props.users}
          onUserAdd={this.props.addUser}
          onUserRemove={this.props.removeUser}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({ users: selectUsers(state) })
const mapDispatchToProps = { fetchUsers, addUser, removeUser }

const enhancer: HOC<*, {}> = compose(
  page,
  connect(mapStateToProps, mapDispatchToProps),
  pure,
)

export default enhancer(HomePage)
