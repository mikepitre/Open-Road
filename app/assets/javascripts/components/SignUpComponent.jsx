var SignUpComponent = React.createClass({
	render: function() {
		return (
			<div className="signInContainer">
			<form onSubmit={this.SignUpSubmitted}>
				<input className="emailtext" ref="emailText" type="text" placeholder="Email" />
				<input className="passwordtext" ref="passwordText" type="text" placeholder="Password" />
				<input className="confirmpasswordtext" ref="confirmpasswordText" type="text" placeholder="Confirm Password" />
				<button className="btnignup" type="submit">SIGN UP</button>
			</form>
			</div>
		);
	},
	SignUpSubmitted: function(e) {
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