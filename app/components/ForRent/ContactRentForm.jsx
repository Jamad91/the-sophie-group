import React from 'react';

export default function contactComponent({signUp}) {
  const onContactSubmit = function(evt) {
    evt.preventDefault()
    let firstName = evt.target.firstName.value;
    let lastName = evt.target.lastName.value;
    let email = evt.target.email.value;
    let questions = evt.target.questions.value
    console.log('SUBMIT BUTTON PRESSED')
  }

  return (
    <div className="container flexbox-container">
      <div className="jumbo">
        <div className="col-md-6 account-left">
          <form id="userInfo" onSubmit={ onContactSubmit }>
            <div className="account-top heading">
              <h3>CONTACT US ABOUT THIS PROPERTY</h3>
            </div>
            <div className="address">
              <span>First Name</span>
              <input type="text" name="firstName" />
            </div>
            <div className="address">
              <span>Last Name</span>
              <input type="text" name="lastName" />
            </div>
            <div className="address">
              <span>Email Address</span>
              <input type="text" name="email" />
            </div>
            <div className="address">
              <span>Questions?</span>
              <input type="password" name="questions" />
            </div>
            <div className="address new">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      <div className="clearfix"></div>
    </div>
  </div>
  )
}
