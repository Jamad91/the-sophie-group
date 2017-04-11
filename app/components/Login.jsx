import React from 'react'

export const Login = ({ login }) => (
  <div className="container flexbox-container">
    <div className="jumbotron">
      <form onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      } }>
        <input name="username" placeholder="Username"/>
        <input name="password" placeholder="Password" type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
