var React = require('react');

var Nav = require('../Nav');

var crclBlue = {
    backgroundColor: '#9BF0F2',
	height: 50,
	width: 50,
	borderRadius: '50%',
	marginBottom: -60,
    left: 60,
    marginTop: 30,
	color: '#fff',
	position: 'relative',
	zIndex: 1000,
	fontSize: 30
};

var crclRed = {
    backgroundColor: '#F57777',
	height: 50,
	width: 50,
	borderRadius: '50%',
	marginBottom: -80,
    left: 110,
    marginTop: 30,
	color: '#fff',
	position: 'relative',
	zIndex: 1000,
	fontSize: 30
};
var flex = {
    display: flex
};
var crclImg = {
	flex: 0
};

var Child2 = React.createClass({

	render: function(){

		return(
			<div>
			<Nav />
			<div className="text-center">
			<h2>Name</h2>
			<p>Gender, Age</p>
			</div>
			<div className="container" style={flex}>
				<a style={crclBlue} className="center-block text-center">X</a>
				<a style={crclRed} className="center-block text-center">X</a>
					<img src="http://placehold.it/300x300" className="center-block img-circle img-responsive" style={crclImg} />
				

			</div>
			</div>
		)
	}
});

module.exports = Child2;






