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
					<input className="emailtext formtext" ref="emailText" type="text" placeholder="Email" />
					<input className="passwordtext formtext" ref="passwordText" type="password" placeholder="Password" />
					<button className="btnlogin" type="submit">LOG IN</button>
					<button onClick={this.SignUp} className="btnsignup" type="button">SIGN UP</button>
				</form>
			</div>
		</div>
		);

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
			 if (data.message === 'Successfully logged in!'){
			 	app.navigate('/addressmap',{trigger:true});
			 }
			 else if  (data.message === 'Username or Email did not match'){
			 	alert('Username or Email did not match');
			 	app.navigate('',{trigger:true});

			 }
		console.log('success')
		console.log(data);
		});



	},
});
