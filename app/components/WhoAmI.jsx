import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div>
    <br />
    <div className="container flexbox-container">
      <div className="jumbotron">
        <div className="whoami">
          <span className="whoami-user-name">
            <h3>Welcome {user && user.name.split(' ')[0]}!</h3>
          </span><br />
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
