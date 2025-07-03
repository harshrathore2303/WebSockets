# HTTP
- HTTP is an unidirectional, where the client sends the request, and the server sends the response.
- HTTP is a stateless protocol that runs on top of TCP which is a connection-oriented protocol it guarantees the delivery of data packet transfer
- Uses the three-way handshaking methods and re-transmits the lost packets.
- HTTP can run on top of any reliable connection-oriented protocol such as TCP or SCTP.
- HTTP message information encoded in ASCII, each HTTP request message is composed of HTTP protocol version(HTTP/1.1, HTTP/2), HTTP methods (GET/POST, etc.), HTTP headers (content type, content length), host information, etc. and the body which contain the actual message which is being transferred to the server.

![HTTP Connection](image.png)

# Websockets
- Communication protocol like HTTP/FTP/SMTP.
- It is a stateful protocol, which means the connection between client and server will stay alive until it gets terminated by either party (client or server). After closing the connection by either of the client or server, the connection is terminated from both ends.
- client-server handshaking
- Once the communication link is established and the connections are opened, message exchange will take place in bidirectional mode until the connection persists between client-server. If either the client or server closes the connection, it is terminated from both ends.
- The way in which the socket works is slightly different from how HTTP works, the status code 101 denotes the switching protocol in WebSocket.

![WebSocket Connection1](image-1.png)

# Why websocket?
- Developed after Long polling because of overuse of resources.

![Read after long polling](image-2.png)

# How WebSockets Work (Behind the Scenes)
- Websockets initializes as HTTP request and response. WebSocket connections are established by upgrading an HTTP request/response pair.
- This is done with the help of header such as connection, upgrade

# Data Transfer
- frames means data segments and communication from both side is done in frames.
- **text frame**:- contains text data 
- **binary data frames**:- contains binary data 
- **ping/pong frames**:- are used to check the connection, sent from the server, the browser responds to these automatically.
- there’s also “connection close frame” and a few other service frames.

## Applications
- Chat application
- Gaming application
- Real-time Notification
- Real-time web application: Real-time web application uses a web socket to show the data at client end, which is continuously being sent by the backend server. In WebSocket, data is continuously pushed/transmitted into the same connection which is already open, that is why WebSocket is faster and improves the application performance. 
e.g. in a trading website or bitcoin trading, for displaying the price fluctuation and movement data is continuously pushed by the backend server to the client end by using a WebSocket channel.

# Conclusion
Websockets are faster than HTTP. Many recent websites are using websocket to make web app faster. But use websockets according to need.

[For more reference](https://sookocheff.com/post/networking/how-do-websockets-work/)

# What Socket.IO is
- Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
- Socket.IO adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.
- In socket.IO data is wrapped with metadata.

# Why Can't a Raw WebSocket Client Connect to a Socket.IO Server?
- Socket.IO expect a handshake in specific format.
- It looks for a specific HTTP polling fallback before upgrading to WebSocket.
- The frame format for data is different from raw WebSocket.

# How it works
- Socket.IO is a full-duplex communication system built on top of low-level transports like WebSockets and HTTP long polling.
- It ensures reliable, real-time communication between client and server with a simple API.

# Engine.IO
- Engine.IO is the low-level engine that powers Socket.IO.
-  It’s the foundational library responsible for handling the transport layer, such as managing connections, handling upgrades (e.g., from polling to WebSocket), and providing a consistent, reliable communication channel.

## Methods
- ![Socket and io](image-3.png)

# io.on('connection', callback)
- Fired when a new client connects.
- socket represents the connected client.

# socket.on('eventName', callback)
- Listens for a specific event sent by the client.

# socket.emit('eventName', data)
- Sends a message to the connected client only.

# io.emit('eventName', data)
- Sends a message to all connected clients.

# socket.broadcast.emit('eventName', data)
- Sends a message to all clients except the sender.

# socket.disconnect()
- Manually disconnects a client.

# socket.on('disconnect', callback)
- Triggered when a client disconnects.

# io.to(room).emit(...) and socket.join(room)
- For working with rooms/channels (e.g., private chat)


# 🤝 Contribute
Feel free to contribute by adding more real-world examples, improving explanations, or making the content easier to understand for beginners. Your contributions are welcome and appreciated!

## 📌 Note
This document is for educational purposes and may evolve with future improvements and contributions.

## 🙏 Credits

Some explanations and code examples are adapted from publicly available resources such as:
- [Sookocheff – How WebSockets Work](https://sookocheff.com/post/networking/how-do-websockets-work/)
- [Socket.IO Documentation](https://socket.io/docs/)
- [6 Pack Programmer](https://www.youtube.com/watch?v=_h7Pc1woq-I)

## 📄 License
This project is licensed under the [MIT License](LICENSE).

All content is used for educational purposes.
