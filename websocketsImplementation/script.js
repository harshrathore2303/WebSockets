// To open a websocket connection, we need to create new WebSocket using the special protocol ws in the url:
// When new WebSocket(url) is created, it starts connecting immediately.
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// Once the socket is created, we should listen to events on it. There are totally 4 events:

// open – connection established,
// message – data received,
// error – websocket error,
// close – connection closed.
// And if we’d like to send something, then socket.send(data) will do that.

// When the Connection is Established
socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send("My name is John");
};

// When a Message is Received from the Server
socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

// When the Connection is Closed
socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};
// When Something Goes Wrong
socket.onerror = function(error) {
  alert(`[error]`);
};


// Program flow
/* 
Client → Connects to Server (WebSocket)
       → Sends: "My name is John"
Server → Responds with a message
Client → Displays received message
       → Handles disconnection/errors gracefully

*/