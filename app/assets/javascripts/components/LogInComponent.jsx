var LogInComponent = React.createClass({
	render: function() {
		return (
			<div className="signInContainer">

				<div className="col-12">

					<p className="welcome"> Welcome to </p>

				</div>

				<div className="background-img col-12">
				
					<h1> Open<span>Road</span> </h1>

					<p className="tagline"> The shortest time 
					between you and there </p>


			<form onSubmit={this.LogInSubmitted}>
				<input className="emailtext" ref="emailText" type="text" placeholder="Email" />
				<input className="passwordtext" ref="passwordText" type="text" placeholder="Password" />
				<button className="btnlogin" type="submit">LOG IN</button>
				<button onClick={this.SignUp} className="btnsignup" type="button">SIGN UP</button>
			</form>
			</div>
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
	// 	// if (username.length == 0 ){
	// 	// 	alert('Enter a email address')
	// 	// 	return
	// 	// }
	// 	// if (password.length == 0 ){
	// 	// 	alert('Enter a password')
	// 	// 	return
	// 	// }
	// 	// // if (!validator.isEmail(username)){
	// 	// // 	alert('Enter a valid email adress')
	// 	// // 	return
	// 	// // }
	// 	// if (username !== ('lbledsoe12@hotmail.com') && password !== ('11693Lpb12')){
	// 	// 	alert('Username/Password does not exsist')
	// 	// 	return
	// 	// }
		app.navigate('/addressmap',{trigger:true});
		console.log('success')

	// },
	},
	SignUp:function(){
		app.navigate('/signup',{trigger:true});

	},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var e = this.refs.emailText.getDOMNode().value;
		var p = this.refs.passwordText.getDOMNode().value;
		console.log(e)
		console.log(p)
		$.post('/login', {email: e, password: p},'JSON').then(function (data) {
			 console.log(data);
		});
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
		// console.log('success')

	},
});
