// Include React
var React = require('react');

var Child1 = React.createClass({

	render: function(){

		return(
				<div className="row">
			<div className="col-md-3 col-md-offset-3">
					<h2 className="h2blue text-center">I'm looking for...</h2>
					<div className="row">
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					</div>
          <div className="row">
					<div className="col-xs-2 col-xs-offset-2 "><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2 "><div className="circle"></div></div>
					</div>
          <div className="row">
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					</div>
			</div>
      </div>
		)
	}
});

module.exports = Child1;
