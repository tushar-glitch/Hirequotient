# Hirequotient
This is my submission for Hirequotient.

## Table of Contents
- Introduction
- Technologies Used
- Setup and Installation
- API Endpoints
## Introduction

Hola! This project is a secure and user-friendly backend system. It helps with logging in securely, storing data using MongoDB, and creating a system where users can manage their profiles, create posts, and comment on them easily.

## Technologies Used

- Node.js
- Express.js
- MongoDB
## Setup and Installation
### Prerequisites:

Before starting, ensure you have Node.js installed on your machine. If not, follow the official installation guides for Node.js and MongoDB based on your operating system.

### Setting Up the Project:

Clone this repository to your local machine using git clone https://github.com/tushar-glitch/Hirequotient.

Navigate to the project directory and run npm install(or simply npm i) to install all required dependencies.

Configuring Environment Variables:

Create a .env file.

Fill in necessary environment variables like database connection URI, secret keys, etc.

After that start the server on the localhost. `node index`


## API Endpoints

### User Profile Management
POST /api/auth/register: Create a new user.

POST /api/auth/login: Authenticate user and generate JWT token.

GET /api/profile/:id: Get user profile by ID.

PUT /api/profile/update: Update user profile.

### Post Creation and Retrieval
POST /api/post/create: Create a new post.

GET /api/post/getall: Get all post.

### Commenting System
POST /api/post/comment/:id: Add a comment to a post.

### Liking System
POST /api/post/like/:id: Give a thumbs up 👍 to a post.
