# Offline Notes & Code Snippets App
## Description
This project aims to create a text editor web application that allows users to create and store notes or code snippets, with or without an internet connection. The application utilizes IndexedDB for local storage, ensuring reliability and accessibility even in offline environments.


## User Management
The user management functionality facilitates the storage and retrieval of notes or code snippets using session data, ensuring seamless access to content without the need for user accounts.

## Session Management
### Objective: Enable users to access their stored notes or code snippets seamlessly using session data.
### Acceptance Criteria: 
-Upon opening the text editor, session data is used to retrieve previously saved content. 
-Content entered in the text editor is automatically saved to session storage or IndexedDB.
### Implementation Details:
-Utilize session storage or IndexedDB to store and retrieve user data within the application.
-Implement mechanisms to automatically save user content as session data when the user interacts with the text editor.
-Ensure that session data is persistent and accessible across application sessions for a seamless user experience.

## Visit the App
https://jatetexteditor-acea7a50c4b0.herokuapp.com

## Technologies Used
The Offline Notes & Code Snippets App is built using the following technologies:

-Node.js: A JavaScript runtime used for server-side development, providing a scalable and efficient environment for running JavaScript code.
-Express.js: A minimalist web framework for Node.js used to build the backend infrastructure of the application, simplifying the development of web applications and APIs.
-IndexedDB: A low-level API for client-side storage of significant amounts of structured data, enabling the application to store notes or code snippets locally.
-Webpack: A module bundler used to bundle JavaScript files for optimized performance and compatibility.
-Workbox: A set of libraries and Node modules for adding offline support to web applications, facilitating the creation of service workers for caching static assets.
-HTML: The standard markup language used to structure and display content on the web.
-CSS: The style sheet language used to define the presentation of HTML elements in the application.
-JavaScript: The programming language of the web used to implement interactive features and functionalities in the application.
By leveraging these technologies, the Offline Notes & Code Snippets App provides a robust and efficient solution for creating, storing, and retrieving notes or code snippets, enhancing user productivity and experience.
