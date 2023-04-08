// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  // _currentRoom: '',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (room) {
    Rooms._data.push(room);
  },

  update: function (data) {
    data.forEach (function (message) {
      var roomname = message.roomname;
      if (roomname && !Rooms._data.includes(roomname)) {
        Rooms.add(roomname);
      }
    });
  }

};