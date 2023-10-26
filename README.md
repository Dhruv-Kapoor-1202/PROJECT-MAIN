# Student And Faculty Management System

![Student And Faculty Management System](Management-System.png)

## About

The Student And Faculty Management System is a web-based application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack for tracking and managing student and faculty data in a school or university.

### Features

- **User Roles**: The system caters to three distinct user roles: Admin, Teacher, and Student, each equipped with unique functionalities and corresponding access levels.
- **Admin Dashboard**: Administrators have the authority to add new students and teachers, manage subjects, administer user accounts, and supervise system configurations.
- **Data Visualization**: Users can visualize their data through tables for easy access and understanding.
- **Time Management**: The system includes a built-in calendar to help users keep track of important dates and events.
- **Notices**: Both admins and teachers can generate real-time notices displayed on the notice board, accessible to all students for quick updates and information sharing.

### Technologies Used

- **Frontend**: React.js, Cascading Style Sheets (CSS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Dhruv-Kapoor-1202/PROJECT-MAIN.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PROJECT-MAIN
   ```

3. Install the required dependencies for the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd ./client
   npm install

   # Install backend dependencies
   cd ./server
   npm install
   ```

4. Setting up the Database
   - **Set Up the MongoDB Database**:  
   Before running the School Management System, you need to create a MongoDB database to store your application's data. You can do this by setting up a database on your local machine or using a cloud-based MongoDB service.
   - **Create a `.env` File**:  
   In the `server` directory of your project, create a file named `.env` if it doesn't already exist. This file will store sensitive configuration data securely.
   - **Update the Database Configuration in `.env`**:  
   Open the `.env` file in a text editor, and add the following configuration details:
   ```env
   MONGO_URL=your_mongodb_connection_uri
   ```
   - Replace `your_mongodb_connection_uri` with the actual connection URI for your MongoDB database. This URI should include the necessary information to connect to your MongoDB instance, including the username, password, host, and database name.

   For example:

   ```env
   MONGO_URL=mongodb://username:password@cluster.mongodb.net/your_database_name
   ```

   Make sure to keep this file private and do not share it in your version control system to protect your database credentials.
 
5. Start the backend server:

   ```bash
   cd ../server
   npm run dev
   ```

6. Start the frontend development server:

   ```bash
   cd ../client
   npm run dev
   ```

7. Access the Student And Faculty Management System in your web browser at `http://localhost:5173/`.

## Contributors

- [Dhruv Kapoor](https://www.linkedin.com/in/dhruvkapoor1202)

Feel free to contribute to this project by creating issues, submitting pull requests, or adding new features.

<!-- ## License

This project is licensed under the [MIT License](LICENSE). -->

<!-- 
You can add this content to a file named `README.md` in the root directory of your project. Don't forget to replace placeholder information like the repository URL, contributors' names, and emails with the actual details specific to your project. Also, make sure to include a `LICENSE` file with the appropriate license text if you haven't already. -->