var React = require('react');

var Nav = require('../Nav');

var Child2 = React.createClass({

	render: function(){

		return(
			<div>
			<Nav />
			<div className="container">

				<div className="col-lg-12">
					<div className="panel panel-danger">
						<div className="panel-heading">
							<h3 className="panel-title">Child #2</h3>
						</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
				</div>

			</div>
			</div>
		)
	}
});

module.exports = Child2;






