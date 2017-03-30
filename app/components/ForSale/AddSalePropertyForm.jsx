import React from 'react';

export default function addPropertyComponent() {
  const addPropertySubmit = function(evt) {
    evt.preventDefault()
    let title = evt.target.title.value;
    let description = evt.target.description.value;
    let imageURL = evt.target.imageURL.value

    console.log('SUBMIT BUTTON PRESSED')
    // signUp(title, description, imageURL); document.getElementById("propertyInfo").reset();
  }

  return (
    <div className="container flexbox-container">
      <div className="jumbo">
        <div className="col-md-6 account-left">
          <form id="userInfo" onSubmit={ addPropertySubmit }>
            <div className="account-top heading">
              <h3>ADD A PROPERTY</h3>
            </div>
            <div className="address">
              <span>Title</span>
              <input type="text" name="title" />
            </div>
            <div className="address">
              <span>Description</span>
              <input type="text" name="description" />
            </div>
            <div className="address">
              <span>Image Url</span>
              <input type="text" name="imageURL" />
            </div>
            <div className="address new">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

//---------------Login Container --------------------//
import { connect } from 'react-redux'

// export default connect()(addPropertyComponent)
