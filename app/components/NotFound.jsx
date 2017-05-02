import React from 'react'

const NotFound = props => {
  const {pathname} = props.location || {pathname: '<< no path >>'}
  console.error('NotFound: %s not found (%o)', pathname, props);
  return (
    <div>
      <br />
      <div className="container flexbox-container">
        <div className="jumbotron">
          <h1>Whoops!</h1>
          <div className="frown-face"></div>
          <h3>I couldn't find the page at route "{pathname}"</h3>
          <h3>Check your url and try again!</h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound
