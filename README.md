# Task Creator - Backend

A simple backend web application that handles task creation, updating, fetching, and deletion.

## Features

- **Create a Task** - Add new tasks to the database.
- **Fetch Tasks** - Retrieve all tasks to be displayed in the frontend.
- **Update Tasks** - Edit and update existing tasks.
- **Delete Tasks** - Remove tasks from the database.

## Technologies Used

- **Node.js** - Backend runtime environment.
- **Express.js** - Web framework for building APIs.
- **MongoDB** - NoSQL database for storing tasks.
- **Mongoose** - ODM for MongoDB.
- **Cors** - Middleware for handling cross-origin requests.
- **Body-parser** - Middleware for parsing request bodies.
- **Morgan** - Logging middleware.
- **Dotenv** - Environment variable management.
- **Nodemon** - Development tool for automatic server restarts.

## Setup Instructions

### 1. Clone and Install Dependencies

```sh
git clone https://github.com/odinaka-dev/Task-Server.git
cd Task-Server
npm install

```

### 2. Configure variable environments

PORT=3000
MONGO_URI=your_mongodb_connection_string (located in the .env file)
nodemon index.js # Run with Nodemon for development

### 3. API Endpoints

json sample
{
"title": "practice task",
"description": "This is a sample task created for practice purpose",
"subtitle": "Optional",
"author": "John becky"
}

- Create Task
  method: POST
  http://localhost:3000/api/tasks

- Fetch All Tasks
  Method: GET
  http://localhost:3000/api/tasks

-Update Task
Method: PUT
http://localhost:3000/api/tasks/:id

-Delete Task
Method: DELETE
http://localhost:3000/api/tasks/:id

## License

##########################

---

use the following endpoints to create a simple yet versatile Task app.
