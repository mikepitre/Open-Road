var LogInComponent = React.createClass({
	render: function() {
		return (
			<div className="signInContainer">
			<form onSubmit={this.LogInSubmitted}>

				<div className="welcome">
				Welcome to
				</div>

				<img src="highway_1280adj.jpg" className="main_image"/>

				<h1> OpenRoad </h1>

				<input className="emailtext" ref="emailText" type="text" placeholder="Email" />
				<input className="passwordtext" ref="passwordText" type="text" placeholder="Password" />
				<button className="btnlogin" type="submit">LOG IN</button>
				<button className="btnsignup" type="submit">SIGN UP</button>
			</form>
			</div>
		);
	},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var e = this.refs.emailText.getDOMNode().value;
		var p = this.refs.passwordText.getDOMNode().value;
		console.log(e)
		console.log(p)
		$.post(
		'localhost:3000/login',
		{email: e, password: p},'JSON');
		// if (username.length == 0 ){
		// 	alert('Enter a email address')
		// 	return
		// }
		// if (password.length == 0 ){
		// 	alert('Enter a password')
		// 	return
		// }
		// // if (!validator.isEmail(username)){
		// // 	alert('Enter a valid email adress')
		// // 	return
		// // }
		// if (username !== ('lbledsoe12@hotmail.com') && password !== ('11693Lpb12')){
		// 	alert('Username/Password does not exsist')
		// 	return
		// }
		app.navigate('/addressmap',{trigger:true});
		console.log('success')

	},
});
