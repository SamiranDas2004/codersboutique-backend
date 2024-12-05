# Candidate Management System

## Overview
The Candidate Management System is a web application designed to manage candidates' information, including their status and details. The application allows users to add, update, and retrieve candidate information efficiently.

## Approach
To achieve the objectives, the following approach was taken:
1. **Research and Planning**: Conducted initial research to understand the requirements for managing candidates and user authentication.
2. **Design**: Created a design document outlining the architecture, including the database schema and API endpoints.
3. **Implementation**: Developed the application using Node.js with Express for the backend, PostgreSQL for the database, and JWT for user authentication.
4. **Testing**: Implemented unit tests and integration tests to ensure the functionality of the application.
5. **Deployment**: Deployed the application using Vercel for hosting.

## Tools Used
- **Programming Languages**: JavaScript (Node.js)
- **Frameworks**: Express
- **Database**: PostgreSQL
- **Version Control**: Git
- **Deployment**: Vercel
- **Other Tools**: dotenv for environment variable management, bcrypt for password hashing, and jsonwebtoken for token generation.

## Challenges Faced
During the development of this project, several challenges were encountered:
- **Database Integration**: Setting up the PostgreSQL database and ensuring proper connection handling was initially challenging. This was addressed by using a connection pool and handling errors gracefully.
- **Authentication**: Implementing JWT for user authentication required careful management of tokens and user sessions. This was resolved by creating middleware to handle token verification.
- **Dynamic Query Building**: Building dynamic SQL queries for filtering candidates based on various parameters was complex. This was managed by constructing query strings based on user input while ensuring SQL injection protection.

## Conclusion
This project has provided valuable insights into building a full-stack application with user authentication and database management. Future work could involve adding more features such as user roles, advanced filtering options, and a frontend interface.

## Acknowledgments
Thank you to the open-source community for providing libraries and tools that made this project possible.

## Getting Started
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yousufali3/coders-boutique-be
   cd coders-boutique-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```
   POSTGRES_URL=<your_postgres_connection_string>
   SECRETKEY=<your_jwt_secret_key>
   PORT=8000
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Access the API at `https://coders-boutique-be.vercel.app/`.

## API Endpoints
### User Endpoints
- **POST /api/v1/user/signup**: Register a new user.
- **POST /api/v1/user/login**: Log in an existing user.
- **GET /api/v1/user/users**: Retrieve all users.

### Candidate Endpoints
- **GET /api/v1/candidate**: Retrieve all candidates.
- **POST /api/v1/candidate**: Add a new candidate.
- **PATCH /api/v1/candidate/:id**: Update the status of a candidate.

## License
This project is licensed under the MIT License.
