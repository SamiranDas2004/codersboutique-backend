Tech Assessment Platform
Overview
The Talent Management Platform is an intuitive web-based solution designed to handle candidate records seamlessly. It provides robust tools for creating, updating, and retrieving candidate data, including tracking their progress and current status.

Development Workflow
The project followed a structured development process:

Analysis and Planning: Conducted detailed research to identify requirements for candidate data handling and authentication mechanisms.
Design: Created a detailed architecture blueprint, including database design and API specifications.
Implementation: Built the backend using Node.js with Express, integrated PostgreSQL for data storage, and utilized JWT for authentication.
Testing: Performed rigorous testing, including unit and integration tests, to ensure reliability.
Deployment: Deployed the platform using Vercel for a smooth hosting experience.
Tools and Technologies
Language: JavaScript (Node.js)
Framework: Express.js
Database: PostgreSQL
Version Control: Git
Hosting: Vercel
Utilities:
dotenv for managing environment variables
bcrypt for securing user passwords
jsonwebtoken for token-based authentication
Key Challenges and Solutions
Database Setup: Initial setup of PostgreSQL and managing connections was tricky. This was resolved by implementing a connection pool for efficient resource utilization.
Authentication System: Handling secure JWT-based authentication required precision. Middleware was developed for seamless token verification and user session management.
Dynamic Query Handling: Creating flexible SQL queries for filtering candidates posed complexities. Parameterized queries were used to ensure security and functionality.
Conclusion
This project provided an opportunity to build a scalable system for managing user data and secure authentication. Future improvements could include role-based access, enhanced search features, and a user-friendly interface.

Acknowledgments
We extend our gratitude to the open-source community for their libraries and tools, which greatly facilitated the development process.

Getting Started
Follow these instructions to set up the platform locally:

Clone the repository:

bash
Copy code
git clone https://github.com/yousufali3/coders-boutique-be  
cd coders-boutique-fe  
Install the required packages:

bash
Copy code
npm install  
Configure the environment variables:
Create a .env file in the root directory with these details:

plaintext
Copy code
POSTGRES_URL=<your_postgres_connection_string>  
SECRETKEY=<your_jwt_secret_key>  
PORT=8000  
Start the application:

bash
Copy code
npm run dev  
Access the API:
The application will be available at: https://coders-boutique-be.vercel.app/.

API Endpoints
User Management
POST /api/v1/user/signup: Register a new user.
POST /api/v1/user/login: Authenticate a user.
GET /api/v1/user/users: List all registered users.
Candidate Management
GET /api/v1/candidate: Fetch all candidate records.
POST /api/v1/candidate: Add a new candidate profile.
PATCH /api/v1/candidate/:id: Update a candidate's status.
