/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'login',
        'signup': 'signup',
        'addressmap': 'addressmap'
    },
    login: function() {
      React.render(<LogInComponent />, document.querySelector('#container'));
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
app.navigate('');




