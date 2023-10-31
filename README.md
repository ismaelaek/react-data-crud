
# React Task Manager App

A simple CRUD (Create, Read, Update, Delete) project for school to manage user data, created using Vite + React.

## Installation

To run the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd users-crud
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the local server for the frontend:

    ```bash
    npm run dev
    ```

5. Add the following `start` script in the `package.json` for the local JSON API server:

    ```json
    "scripts": {
        "start": "json-server -p 3006 -w db.json"
    }
    ```

6. Start the local JSON API server using the `start` script:

    ```bash
    npm run start
    ```

The local JSON API server will run on port 3006 using the data from the `db.json` file.

## Dependencies

Make sure the following dependencies are installed:

- antd: ^5.10.2

    ```bash
    npm install antd@5.10.2
    ```

- axios: ^1.6.0

    ```bash
    npm install axios@1.6.0
    ```

- react: ^18.2.0

    ```bash
    npm install react@18.2.0
    ```

- react-dom: ^18.2.0

    ```bash
    npm install react-dom@18.2.0
    ```

- react-icons: ^4.11.0

    ```bash
    npm install react-icons@4.11.0
    ```

- react-router-dom: ^6.17.0

    ```bash
    npm install react-router-dom@6.17.0
    ```
These commands will install the necessary dependencies for the project.
- Or install all the latest versions at once using the following command.

    ```bash
    npm install 
    ```
## Usage

The project, built with Vite + React, allows you to perform basic CRUD operations on a list of users. You can view, add, edit, and delete user data through the user interface provided by the application.

Feel free to explore the features and functionalities of the application.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
