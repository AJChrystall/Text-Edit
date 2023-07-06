# Text Editor Starter Code
This is a text editor web application built using webpack and designed to run as a client-server application. It leverages modern JavaScript features and utilizes IndexedDB for data storage. The application also includes service worker functionality for offline support and can be deployed to Heroku.


# Getting Started:
To get started with the text editor web application, follow the steps below:


# Installation:


Clone the repository to your local machine.
git clone <repository-url>

Navigate to the root directory of the project.
cd text-editor-web-app

Install the dependencies for both the client and server.
npm run install


# Running the Application:
Start the application by running the following command from the root directory:

npm run start
This command will start the backend server and serve the client application.

Open your web browser and navigate to http://localhost:3000 to access the text editor web application.


# Bundling JavaScript Files:
When running the text editor application, the JavaScript files will be automatically bundled using webpack. The bundling process ensures that the application runs smoothly in the browser without any errors.


# Webpack Plugins:
During the bundling process, the following webpack plugins are utilized:

HtmlWebpackPlugin: Generates an HTML file based on the provided template file (index.html) with necessary JavaScript and CSS bundles injected.

InjectManifest: Generates a service worker file (src-sw.js) that is responsible for caching static assets and enabling offline functionality.

WebpackPwaManifest: Generates a manifest file (manifest.json) that provides metadata about the web application, such as name, description, and icons.


# IndexedDB Data Storage:
The text editor web application utilizes IndexedDB for data storage. When you open the text editor, a database storage is immediately created. Any content you enter in the editor will be saved to the IndexedDB when you click off the DOM window. The content will be retrieved from IndexedDB when you reopen the text editor.


# Install Button and Desktop Icon:
The text editor web application includes an "Install" button. When clicked, it allows you to download the web application as an icon on your desktop for easy access.


# Service Worker and Offline Support:
The text editor web application registers a service worker using workbox. The service worker enables offline support by pre-caching static assets, including HTML files, CSS files, and JavaScript bundles. When you load the web application, these assets are cached, allowing you to access the application even when offline.


# Deployment to Heroku:
The text editor web application is ready for deployment to Heroku. It includes proper build scripts for a webpack application, ensuring a smooth deployment process. Please refer to the Heroku documentation for more details on deploying the application.


# License: 
This project is licensed under the MIT License.


# Author: AJChrystall


# URLs:
Git Repo: AJChrystall/Text-Edit
Git HTML: https://github.com/AJChrystall/Text-Edit.git
Git SSH: git@github.com:AJChrystall/Text-Edit.git 
Heroku URL: https://afternoon-castle-50954-b1ad42b83380.herokuapp.com/