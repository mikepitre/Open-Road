var LogInComponent = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.LogInSubmitted}>
				<input className="emailtext" ref="emailText" type="text" placeholder="Email" />
				<input className="passwordtext" ref="passwordText" type="text" placeholder="Password" />
				<button className="btnlogin" type="submit">LOG IN</button>
				<button className="btnsignup" type="submit">SIGN UP</button>
			</form>
		);
	},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var username = this.refs.emailText.getDOMNode().value
		var password = this.refs.passwordText.getDOMNode().value
		if (username.length == 0 ){
			alert('Enter a email adress')
			return
		}
		if (password.length == 0 ){
			alert('Enter a password')
			return
		}
		// if (!validator.isEmail(username)){
		// 	alert('Enter a valid email adress')
		// 	return
		// }
		if (username !== ('lbledsoe12@hotmail.com') && password !== ('11693Lpb12')){
			alert('Username/Pawssword does not exsist')
			return
		}
		app.navigate('/addressmap',{trigger:true});
		console.log('success')

	}
		
});