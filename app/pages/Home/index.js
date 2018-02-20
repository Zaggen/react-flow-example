import React from 'react'
import PropTypes from 'prop-types'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import page from 'hocs/page'
import { Wrapper, Title } from './styled'
import Users from './Users'
import { fetchUsers, addUser, removeUser } from './actions'
import { selectUsers } from './selectors'


// Example with connected functional component
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
class HomePage extends React.PureComponent {
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

HomePage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({ users: selectUsers(state) })
const mapDispatchToProps = { fetchUsers, addUser, removeUser }

const enhancer = compose(
  page,
  connect(mapStateToProps, mapDispatchToProps),
  pure,
)

export default enhancer(HomePage)
