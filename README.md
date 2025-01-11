# Contact App

## Overview
The Contact App is a web application built using React and Vite, designed to manage a list of contacts. It allows users to add, view, and delete contacts, providing a simple and intuitive interface for managing personal or professional connections. The application leverages modern web technologies, including Tailwind CSS for styling and ESLint for code quality.

## Key Features
- **Add Contacts**: Users can input contact details such as name, last name, email, and phone number. The application validates the input to ensure all fields are filled before adding a contact.
- **Display Contacts**: The app displays a list of added contacts, showing their names, emails, and phone numbers.
- **Delete Contacts**: Users can remove contacts from the list, ensuring that the contact list remains up-to-date.
- **Responsive Design**: The application is designed to be responsive, adapting to various screen sizes using Tailwind CSS.

## Technologies Used
- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **Vite**: A build tool that provides a fast development environment and optimized production builds for modern web applications.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with a focus on customization and responsiveness.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code, ensuring code quality and consistency.

## File Structure
The project follows a structured file organization, making it easy to navigate and maintain. Here’s a brief overview of the key files and directories:

- **src/**: Contains the main application code.
  - **components/**: Houses the React components, including the header, body, and footer.
  - **constants/**: Contains constants such as input configurations.
  - **App.jsx**: The main application component that renders the header and body.
  - **index.css**: The main CSS file that imports Tailwind CSS styles.
  - **main.jsx**: The entry point of the application that renders the App component.

- **public/**: Contains static assets like the application icon (vite.svg).

- **package.json**: Lists the project dependencies and scripts for development, building, and linting.

- **tailwind.config.js**: Configuration file for Tailwind CSS, defining the content sources and responsive breakpoints.

- **vite.config.js**: Configuration file for Vite, specifying plugins and server settings.

## Getting Started
To run the Contact App locally, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd contact-app
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Development Server**: 
   ```bash
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the application.

## Conclusion
The Contact App serves as a practical example of using React and Vite to build a modern web application. It demonstrates essential features such as state management, form handling, and responsive design, making it a valuable project for learning and experimentation in web development.

