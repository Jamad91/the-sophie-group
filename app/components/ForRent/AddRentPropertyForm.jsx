import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addForRent } from 'APP/app/action-creators/forRent'


class ForRentFormContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageURL: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      title: evt.target.title,
      description: evt.target.description,
      imageURL: evt.target.imageURL
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addForRent(this.state);
    this.setState({
      title: '',
      description: '',
      imageURL: ''
    })
  }

  render() {
    return (
      <div className="container flexbox-container">
        <div className="jumbo">
          <div className="col-md-6 account-left">
            <form id="userInfo" onSubmit={ this.handleSubmit }>
              <div className="account-top heading">
                <h3>ADD A PROPERTY</h3>
              </div>
              <div className="address">
                <span>Title</span>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="address">
                <span>Description</span>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="address">
                <span>Image Url</span>
                <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange} />
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
}

// const NewForRent = (props) => {
//   const handleChange = props.handleChange;
//   const handleSubmit = props.handleSubmit;
//   const inputValue = props.inputValue;
//
//   return (
//     <div className="container flexbox-container">
//       <div className="jumbo">
//         <div className="col-md-6 account-left">
//           <form id="userInfo" onSubmit={ this.handleSubmit }>
//             <div className="account-top heading">
//               <h3>ADD A PROPERTY</h3>
//             </div>
//             <div className="address">
//               <span>Title</span>
//               <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
//             </div>
//             <div className="address">
//               <span>Description</span>
//               <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
//             </div>
//             <div className="address">
//               <span>Image Url</span>
//               <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange} />
//             </div>
//             <div className="address new">
//               <input type="submit" value="submit" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

const mapStateToProps = function(state) {
  return {}
}

const mapDispatchToProps = dispatch => ({
  addForRent: (info) => dispatch(addForRent(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForRentFormContainer)



// import React from 'react';
//
// function addPropertyComponent() {
//   const addPropertySubmit = function(evt) {
//     evt.preventDefault()
//     let title = evt.target.title.value;
//     let description = evt.target.description.value;
//     let imageURL = evt.target.imageURL.value
//     this.props.addForRent()
//     console.log('SUBMIT BUTTON PRESSED')
//     // signUp(title, description, imageURL); document.getElementById("propertyInfo").reset();
//   }
//
//   return (
//     <div className="container flexbox-container">
//       <div className="jumbo">
//         <div className="col-md-6 account-left">
//           <form id="userInfo" onSubmit={ addPropertySubmit }>
//             <div className="account-top heading">
//               <h3>ADD A PROPERTY</h3>
//             </div>
//             <div className="address">
//               <span>Title</span>
//               <input type="text" name="title" />
//             </div>
//             <div className="address">
//               <span>Description</span>
//               <input type="text" name="description" />
//             </div>
//             <div className="address">
//               <span>Image Url</span>
//               <input type="text" name="imageURL" />
//             </div>
//             <div className="address new">
//               <input type="submit" value="submit" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// //---------------Login Container --------------------//
// import { connect } from 'react-redux'
// import { addForRent } from 'APP/app/action-creators/forRent';
//
// export default connect(
//   state=> ({}),
//   {
//     addForRent
//   })(addPropertyComponent)
