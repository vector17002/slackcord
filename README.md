<h1>Chat Application</h1>

This is a real-time chat application built using React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT (JSON Web Tokens), and Socket.IO.

<h2> Features </h2>

- Real-time messaging: Allows users to send and receive messages instantly.
- User authentication: Users can sign up, log in, and authenticate using JSON Web Tokens (JWT).
- Persistent data storage: Messages are stored in a MongoDB database, ensuring data persistence.
- Secure communication: Communication between the client and server is encrypted using HTTPS, and JWT is used for secure authentication.
- WebSockets: Implemented using Socket.IO, enabling real-time bidirectional communication between clients and the server.

<h2> Technologies used </h2>

 <h3> Frontend: </h3>
  - React: A JavaScript library for building user interfaces.
  - Tailwind CSS: A utility-first CSS framework for building responsive designs.
  - Socket.IO Client: A JavaScript library for real-time web applications, used for client-side WebSocket communication.

 <h3> Backend: </h3>
  - Node.js: A JavaScript runtime environment for building server-side applications.
  - Express.js: A web application framework for Node.js, used for building the server-side application.
  - MongoDB: A NoSQL database used for storing chat messages and user data.
  - JSON Web Tokens (JWT): Used for user authentication and authorization.
  - Socket.IO: A JavaScript library for real-time bidirectional communication, used for server-side WebSocket communication.

 <h3> Installation </h3>

To run the application locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
