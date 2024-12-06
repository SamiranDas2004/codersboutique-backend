Candidate Management System
Efficiently manage and track candidate information with this robust web-based application.

🚀 Features
Add, update, and retrieve candidate details.
Secure authentication with JWT.
Filter and manage candidate records dynamically.
🛠️ Technologies Used
Backend: Node.js, Express.js
Database: PostgreSQL
Authentication: JSON Web Tokens (JWT), bcrypt
Environment Management: dotenv
Deployment: Vercel
📋 API Endpoints
User Management
POST /api/v1/user/signup: Register a new user.
POST /api/v1/user/login: Authenticate a user.
GET /api/v1/user/users: List all users.
Candidate Management
GET /api/v1/candidate: Fetch all candidates.
POST /api/v1/candidate: Add a new candidate.
PATCH /api/v1/candidate/:id: Update a candidate's status.
🛣️ Installation and Setup
Prerequisites
Ensure you have the following installed:

Node.js
PostgreSQL
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/candidate-management-system  
cd candidate-management-system  
Install dependencies:

bash
Copy code
npm install  
Set up environment variables:
Create a .env file in the root directory with the following variables:

plaintext
Copy code
POSTGRES_URL=<your_postgres_connection_string>  
SECRETKEY=<your_jwt_secret_key>  
PORT=8000  
Run the application:

bash
Copy code
npm run dev  
Access the application at:

Local: http://localhost:8000
Hosted: [Deployed Link](https://codersboutique-frontend.vercel.app/)
