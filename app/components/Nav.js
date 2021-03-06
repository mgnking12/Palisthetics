
var React = require('react');

var Nav = React.createClass({

	// Here we render the function
	render: function(){

		return(

<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand orange" href="#">Palisthenics</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#/Child1" className="blue">Link</a></li>
        <li><a href="#/Child2" className="blue">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle blue" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#/SignIn">Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
		)
	}
});

// Export the componen back for use in other files
module.exports = Nav;