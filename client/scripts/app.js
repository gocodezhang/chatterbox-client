// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'Jay Z',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // MessagesView.initialize();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    // App.fetch(App.fetch);

  },

  fetch: function(callback = ()=>{}) {
    App.startSpinner();
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // callback(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // Update messages and re-render
      Messages._update(data);
      MessagesView.initialize();

      // Update rooms and re-render
      Rooms.update(data);
      // RoomsView.initialize();
      RoomsView.render();

      callback();

      // hmmmmmm ...
      // App.startSpinner();
      setTimeout(App.fetch.bind(this, App.stopSpinner), 10000);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
