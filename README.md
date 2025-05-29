# Cloud To-Do

A full-stack To-Do application built with the MERN stack (MongoDB, Express, React, Node.js).  
Easily manage tasks with user authentication and persistent storage in the cloud.

## Features

- User signup & login (authentication)
- Add, edit, and delete to-do tasks
- Tasks stored in MongoDB for persistence
- Responsive UI with [Material-UI (MUI)](https://mui.com/)
- RESTful API with Express.js
- Secure password handling
- Error handling and notifications

## Project Structure

```
cloud-to-do/
  client/      # React frontend
  server/      # Express backend & API
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/cloud-to-do.git
cd cloud-to-do
```

**2. Install dependencies**

Backend:
```bash
cd server
npm install
```

Frontend:
```bash
cd ../client
npm install
```

**3. Set up environment variables**

In `/server`, create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```

**4. Start the servers**

Start backend:
```bash
cd server
npm start
```

Start frontend (in a new terminal):
```bash
cd client
npm start
```

The React app will open at [http://localhost:3000](http://localhost:3000), API runs on [http://localhost:8000](http://localhost:8000).

## Usage

- **Sign up** for a new account.
- **Log in** to manage your to-do list.
- **Add, edit, or delete** tasks. Changes are saved in the cloud.

## Tech Stack

- **Frontend:** React, Material-UI, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT

## License

This project is licensed under the MIT License.

---

Feel free to contribute by creating issues or pull requests!
