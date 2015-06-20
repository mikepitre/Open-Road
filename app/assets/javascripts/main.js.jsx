/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'login',
        'signup': 'signup',
        'addressmap': 'addressmap'
    },
    login: function() {
      React.render(<LogInComponent/>, document.querySelector('#container'));
    },
    addressmap: function() {
      React.render(<AddressMapComponent/>, document.querySelector('#container'));
    },
    signup: function() {
      React.render(<SignUpComponent/>, document.querySelector('#container'));
  }
});
var app = new App();
Backbone.history.start();
<<<<<<< HEAD
<<<<<<< Updated upstream
app.navigate('');
=======
// app.navigate('');
>>>>>>> Stashed changes
=======
app.navigate('/');
>>>>>>> 2239f68ac9d4d2e9fa0369487da15ead72dddaf1
