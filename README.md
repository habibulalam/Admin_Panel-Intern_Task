# Responsive Admin Dashboard

A responsive admin dashboard application built with React and Tailwind CSS. The dashboard integrates with a RESTful API to display user and product data.

## Live Demo

Check out the live demo of the application: [Live Demo](https://responsive-dashboard-task.netlify.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Technical Requirements](#technical-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Bonus Features](#bonus-features)
- [Data Fetching Options](#data-fetching-options)
- [Challenges Faced](#challenges-faced)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a single-page application (SPA) that serves as an admin dashboard. It features a sidebar for navigation (All Users and Products) and a main content area to display data.

## Features

- Fetch and display a list of users from the provided RESTful API.
- Display user information such as name, email, and city name.
- View full details of each user.
- Fetch and display a list of products from the provided RESTful API.
- Add a product.
- Find a single product by ID.
- Delete a product.
- Implement sorting and searching functionalities for users and products.
- Include basic authentication to simulate user login.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.
- **React Router:** A library for routing in React applications.
- **useState and useEffect Hooks:** React hooks for managing state and side effects.
- **Context API:** Used for managing global state and providing authentication.

## Technical Requirements

- Built with a modern frontend framework: React.
- Styled using Tailwind CSS.
- Responsive design for usability across various devices.
- Version control using Git.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/habibulalam/Admin_Panel-Intern_Task.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Admin_Panel-Intern_Task
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

## API Endpoints

### Users

- Fetch users:
  ```
  GET https://jsonplaceholder.typicode.com/users
  ```

### Products

- Fetch products:
  ```
  GET https://api.restful-api.dev/objects
  ```
- Add a product:
  ```
  POST https://api.restful-api.dev/objects
  ```
- Get a single product:
  ```
  GET https://api.restful-api.dev/objects/:id
  ```
- Delete a product:
  ```
  DELETE https://api.restful-api.dev/objects/:id
  ```

## Bonus Features

- Sorting and searching functionalities for users and products.
- Basic authentication to simulate user login.

## Data Fetching Options

- **Primary API Requests:** Fetch user data from `https://jsonplaceholder.typicode.com/users` and product data from `https://api.restful-api.dev/objects`.
- **Local Backup Data:** If the primary API request fails, fetch product data from local backup files (`backup-api-data.json`).

## Challenges Faced

- **Handling API Downtime:** Implemented a fallback mechanism to fetch data from local backup files when the primary API is unavailable.
- **Responsive Design:** Ensured the application is fully responsive across various devices using Tailwind CSS.
- **State Management:** Managed complex state and authentication using React Context API and hooks.
- **Error Handling:** Ensured robust error handling to provide a seamless user experience even when API requests fail.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
