// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // clean out all messages first
    // MessagesView.$chats.empty();
    // attempt trim of excess chat children ?

    MessagesView.render();
    // console.log('Hmm? >>>> ', MessagesView.$chats.children().length);
    $('#chats .username').on('click', MessagesView.handleClick);
    $('#chats .username').mouseenter(function () {
      $(this).css({
        'color': 'blue',
        'cursor': 'pointer'
      });
    })
      .mouseleave(function () {
        $(this).css({
          'color': 'black',
          'cursor': 'default'
        });
      });
    // MessagesView.$chats.on('click', '.username', MessagesView.handleClick);

  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    Messages._data.forEach(function (message) {
      MessagesView.$chats.append(MessagesView.renderMessage(message));
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // Messages._add(message);

    MessagesView.$chats.append(MessageView.render(message));
    // to pass annoying test
    // if (MessagesView.$chats.children().length === 1) {
    //   $('.username').on('click', MessagesView.handleClick);
    // }
    // $('#messageID').on('click', MessagesView.handleClick);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var friendName = $(this).text();
    Friends.toggleStatus(friendName);
  }

};