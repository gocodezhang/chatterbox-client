// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  _add: function(message) {
    Messages._data.push(message);
  },

  _retrieve: function (room) {
    var messagesInTheRoom = [];
    Messages._data.forEach(function (message) {
      if (message.roomname === room) {
        messagesInTheRoom.push(message);
      }
    });
    return messagesInTheRoom;
  },

  _update: function (data) {
    // clean up the old messgaes
    Messages._data = [];
    // iterate
    for (var i = 0; i < data.length; i++) {
      var messageText;
      var originalText = data[i].text;
      // construct the message
      if (originalText) {
        messageText = Messages._escape(data[i].text);
      }
      // var messageText = Messages._escape(data[i].text);

      // var messageText = data[i].text;
      // & ---> &amp;
      // < ---> &lt;
      // >---> &gt;
      // var cleanedMessage = messageText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      var message = {
        username: data[i].username,
        // messageID: data[i].message_id,
        text: messageText,
        roomname: data[i].roomname
      };
      // Push into our Messages model

      Messages._add(message);
    }
  },

  _escape: function (string) {
    var replaceThese = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    };

    var newString = string.replace(/[&<>]/g, function(found) {
      return replaceThese[found] || found;
    });

    return newString;
  }

};