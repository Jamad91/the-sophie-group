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
      <div className="jumbotron">
        <div className="col-md-6 account-left">
          <form method="POST" action="http://formspree.io/jdicolandrea@gmail.com">
            <div>
              <textarea name="Name" placeholder="Name "></textarea>
            </div>
            <div>
              <textarea name="Phone" placeholder="Phone Number "></textarea>
            </div>
            <div>
              <textarea name="Email" placeholder="Email "></textarea>
            </div>
            <div>
              <textarea name="Questions" placeholder="Questions? "></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      <div className="clearfix"></div>
    </div>
  </div>
  )
}
