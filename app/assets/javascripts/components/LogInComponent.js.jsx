var LogInComponent = React.createClass({
	render: function() {
		return (
	<div className="background-img">

	<p className="welcome"> Welcome to </p>

		<div className="main">

				<h1> Open Road </h1>

				<p className="tagline"> The shortest time
					between you and there </p>

			<div className="position_rt1">

				<form className="formgroup" onSubmit={this.LogInSubmitted}>

					<input className="emailtext formtext" ref="emailText" type="text" placeholder="Email" />
					<input className="passwordtext formtext" ref="passwordText" type="password" placeholder="Password" />

		

			<div className="fullwidth">

					<button className="btnlogin btn" type="submit">LOG IN </button>
			</div>

					<div className="float-rt"> 

						<div className="fullwidth">
						<p className="not_member"> Not a member? </p>
						</div>

						<div className="fullwidth">
						<button onClick={this.SignUp} className="btnsignup btn" type="button">SIGN UP</button>

						</div>

					</div>
					</form>
			</div>

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
