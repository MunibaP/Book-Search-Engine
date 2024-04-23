<div align ="center">

# Book Search Engine

![License Badge](https://shields.io/badge/license-MIT-blue)

![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
</div>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributions](#contributions)
- [Tests](#tests)
- [Links](#links)
- [Contact Information](#contact-information)
- [License](#license)

## Description
Welcome to my Text Editor PWA web application! In this week's challenge, as a transitional web developer I was tasked with creating a browser-based text editor. The Text Editor PWA project is designed to provide users with a seamless editing experience while incorporating cutting-edge web technologies. Utilizing IndexedDB for data persistence and Express.js for server-side routing, the application empowers users to create and save notes or code snippets both online and offline. By adhering to acceptance criteria such as proper server deployment on Render, successful data retrieval and storage with IndexedDB, and flawless operation across various JavaScript environments, the Text Editor PWA ensures a reliable and efficient solution for modern text editing needs.

## User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Technologies
The technologies I used in this challenge includes:

1. Node.js
2. Express.js
3. MongoDB database
4. Webpack & WebpackPwaManifest Plugins
5. Concurrently
6. Babel
7. IndexedDB
8. Mini-CSS-Extract Plugin
9. Visual Studio Code(VS-code)
10. Github: Github was used to create a repository which includes all the required files, links to the projects, package.json, npmrc file, gitignore and the README file.
11. Gitlab: Gitlab was used to clone the project to our laptop.

## Installation
1. To install the challenge#19 , first create a new repository in your Github account, and then clone this repository to your local computer. 
```
To clone: git clone https://github.com/your-username/repository-name.git   
```           

2. Open the cloned repository in a visual studio code.
 
3. Open integrated terminal on server.js in order to run "npm install" on the command line to install dependencies. In addition, create a gitignore file, which should includes node_modules, .env file, and .DS_Store.   

## Usage
1. Open the repository, run 'npm install' to install dependencies.

2. Open integrated terminal on server.js in order to run "npm start" to start the server. 

3. Open the Deployed application on the browser.

4. Upon accessing the application, you should see the text editor interface. Optionally, when prompted, click on the "Install" button to download the web application as an icon on your desktop for quick access.

5. The Text Editor enables users to input, view, edit, or delete content, with instant saving facilitated by IndexedDB, ensuring secure local storage. Whether the browser is closed or the page is refreshed, the content remains retained and accessible when reopening the application.

6. Additionally, the Text Editor enables users to edit existing content or create new entries offline.

## Screenshot
**The Text Editor homepage:**

![Text Editor_homepage](/assets/textEditor_homepage.jpeg)

**This image shows the Text Editor web application running as a freestanding Progressive Web App (PWA) icon on the desktop:**

![Text Editor_App](/assets/textEditor_app.jpeg.png)

**The following image shows the application's manifest.json file:**

![Text Editor_Manifest.json](/assets/textEditor_manifest.png)

**The following image shows the application's registered service worker:**

![Text Editor_ServiceWorker](/assets/textEditor_serviceWorker.png)

**The following image shows the application's IndexedDB storage:**

![Text Editor_IndexedDB](/assets/textEditor_indexedDB.png)


## Contributions
Contributions to the The Text Editor are welcome and encouraged. Here are some ways you can contribute:

1. **Bug Reports and Feature Requests:**
  - If you encounter any issues or have suggestions for new features, please open an issue on the GitHub repository.
    
2. **Enhancements to The Text Editor Application:**
  -  We welcome contributions aimed at improving this application. If you find ways to enhance the application or identify any limitations, feel free to submit a pull request.

3. **Documentation Improvements:**
  - Help improve the clarity and completeness of this documentation. If you find areas that need clarification or additional information, submit a pull request with your suggested changes.     

## Tests
There are no tests required for this project.

## Links
- [Deployment link](https://text-editor-aj05.onrender.com)
- [GitHub repository](https://github.com/MunibaP/Text-Editor.git)
  
## Questions
I appreciate and encourage any questions you may have. Feel free to reach out for further information.
  
## Contact Information
- GitHub: [MunibaP](https://github.com/MunibaP)
- Email: munibapervez596@gmail.com

## License
Please refer to [MIT]() to acquire details about this license 

### Copyright © 2024 Muniba Pervez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
