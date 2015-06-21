var SignUpComponent = React.createClass({
	render: function() {
		return (

<div className="background-img">

	<p className="welcome"> Sign up </p>

		<div className="main">

			<h1> Open Road </h1>

			<div className="signInContainer">

			<form onSubmit={this.SignUpSubmitted}>

				<div className="position_rt2 addl_top_mrgn">

					<input className="emailtext formtext" ref="signemailText" type="text" placeholder="Email" />
					<input className="passwordtext formtext" ref="signpasswordText" type="password" placeholder="Password" />
					<input className="confirmpasswordtext formtext" ref="confirmpasswordText" type="text" placeholder="Confirm Password" />
					<input className="PhoneNumber formtext" ref="PhoneNumber" type="text" placeholder="Phone Number" />
					<button className="btsignup btn" type="submit">SIGN UP</button>

				</div>	


			</form>
			</div>

		</div>

</div>

		);
	},
	SignUpSubmitted: function(e) {
		e.preventDefault();
		var email = this.refs.signemailText.getDOMNode().value;
		var password = this.refs.signpasswordText.getDOMNode().value;
		var confirmpassword = this.refs.confirmpasswordText.getDOMNode().value;
		var phonenumber = this.refs.PhoneNumber.getDOMNode().value;
		console.log(email)
		console.log(password)
		console.log(confirmpassword)
		console.log(phonenumber)

		$.post('/users', {email: email, password: password, 'password confirmation': confirmpassword, phone: phonenumber},'JSON').then(function (data) {
			 console.log(data);
			 app.navigate('',{trigger:true});
		});
	// 	var username = this.refs.signemailText.getDOMNode().value
	// 	var password = this.refs.signpasswordText.getDOMNode().value
	// 	if (username.length == 0 ){
	// 		alert('Enter a email adress')
	// 		return
	// 	}
	// 	if (password.length == 0 ){
	// 		alert('Enter a password')
	// 		return
	// 	}
	// 	// if (!validator.isEmail(username)){
	// 	// 	alert('Enter a valid email adress')
	// 	// 	return
	// 	// }
	// 	if (username !== ('lbledsoe12@hotmail.com') && password !== ('11693Lpb12')){
	// 		alert('Username/Pawssword does not exsist')
	// 		return
	// 	}
	// 	app.navigate('/signup',{trigger:true});
	// 	console.log('success')

	 }
		
});