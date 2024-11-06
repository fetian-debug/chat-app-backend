# Real-Time Chat Application
A simple real-time chat application built with Node.js and Pusher. This application allows users to send and receive messages instantly in a chat interface.


### Backend For Chat App Here.
### [Frontend For App](https://github.com/fetian-debug/chat-app-frontend)

## Features

- Real-time messaging using Pusher
- User authentication
- Responsive design for mobile and desktop

## Technologies Used

- **Node.js**: Backend server to handle requests and manage WebSocket connections.
- **Express**: Web framework for Node.js.
- **Pusher**: Real-time communication service to facilitate instant messaging.
- **HTML/CSS**: For the frontend layout and styling.
- **Vuejs**: For Frontend JavaScript framework for building user interfaces and single-page applications. 
- **JavaScript**: For client-side interactivity.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Pusher account. Sign up at [Pusher](https://pusher.com/) and create a new app to get your credentials.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fetian-debug/chat-app-backend
   cd your-repo-name
   ```
2- **Install dependencies:**:

  ```bash
  npm install
  ```
3-**Set up environment variables**:

  ```plaintext
   PUSHER_APP_ID=your_app_id
   PUSHER_KEY=your_key
   PUSHER_SECRET=your_secret
   PUSHER_CLUSTER=your_cluster

  ```
4- **Run the application:**:

   ```bash
   npm run serve
   ```
  The server should start on http://localhost:3000

### Usage
- Open your browser and navigate to http://localhost:3000.
- You should see the chat interface.
- Open multiple tabs or browsers to test real-time messaging.


### Deployment

I deployed the Chat App on [Railway App](https://railway.app/). You can access the backend of the Chat App using the following link: [Backend Chat App](https://chat-app-backend-production-970c.up.railway.app/)

### API Endpoints

- Register: Use the /register endpoint to create a new user account.
- Login: Use the /login endpoint to authenticate existing use
- Chat: Use the /chat for Send a new message to the chat.
