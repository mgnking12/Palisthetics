// Include React
var React = require('react');

var signinBrand = {
fontFamily: 'Exo',
    fontWeight: 600,
    color: '#F98100',
    fontSize: 40
};

var input = {
backgroundColor: '#F1FFE2',
marginBottom: 5
};

var Child2 = React.createClass({

	render: function(){

		return(
<div>
                <form className="form-signin col-md-2 col-md-offset-5">
                    <h2 style={signinBrand}>Palisthenics</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input style={input} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input style={input} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <a href="#/Child1" className="btn btn-lg btn-primary btn-block">Sign in</a>
                </form>
</div>
		)
	}
});

module.exports = Child2;


