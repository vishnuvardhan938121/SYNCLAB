# SYNCLAB

SYNCLAB is a real-time collaborative coding and compilation platform that allows multiple users to write, edit, and execute code together in a shared environment. It is designed for developers, students, and teams to collaborate efficiently on coding tasks, interviews, and projects.

---

## Features

* Real-Time Collaboration: Multiple users can join a coding session using a unique Room ID and edit code simultaneously.
* Multi-Language Support: Compile and run code in popular programming languages.
* User Authentication: Create accounts and join groups with secure login.
* Interactive Code Execution: Execute code collaboratively and view results in real-time.
* Responsive UI: User-friendly interface built with React.
* Project Management: Organize collaborative coding sessions effectively.

---

## Tech Stack

* Frontend: React, HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Real-Time Communication: Socket.io
* Code Execution API: JDoodle API
* Database: MongoDB
* Deployment: Render / Cloud hosting

---

## Installation

1. Clone the repository:

git clone [https://github.com/vishnuvardhan938121/SYNCLAB.git](https://github.com/vishnuvardhan938121/SYNCLAB.git)
cd SYNCLAB

2. Install backend dependencies:

cd backend
npm install

3. Set environment variables:

Create a .env file in the backend folder:

MONGO_URI=<your_mongodb_connection_string>
JDoodle_clientId=<your_jdoodle_client_id>
JDoodle_clientSecret=<your_jdoodle_client_secret>
PORT=5000

4. Run the backend:

cd backend
nodemon index.js

5. Install and run frontend:

cd frontend
npm install
npm start

6. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Create a new coding room or join an existing room using a Room ID.
2. Start coding collaboratively with other participants.
3. Select the programming language and click Run to execute the code in real-time.
4. Share results and debug together.

---

## License

This project is licensed under the MIT License.

---

## Contact

Vishnu Vardhan
Email: [j.vishnuvardhan9@gmail.com](mailto:j.vishnuvardhan9@gmail.com)
GitHub: [https://github.com/vishnuvardhan938121](https://github.com/vishnuvardhan938121)
