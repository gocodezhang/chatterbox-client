// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // clean up room dropdown
    // RoomsView.$select.empty();
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);

  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms._data.forEach(function(room) {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var room = `<option value=${roomname}>${roomname}</option>`;
    RoomsView.$select.append(room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // tell rooms.js we have selected a room
    var room = $(this).val();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoomName = window.prompt('Please enter a room name!');
    Rooms.add(newRoomName);
    RoomsView.renderRoom(newRoomName);
  }

};
