import React from 'react'
import Footer from './Footer'

export const Login = ({ login }) => (
  <div>
    <br />
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
        <div id="footer">
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
