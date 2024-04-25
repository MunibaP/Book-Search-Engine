<div align ="center">

# Book Search Engine

![License Badge](https://shields.io/badge/license-MIT-blue)

![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
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
Welcome to the Book Search Engine PWA! This project transforms a traditional book search engine into a modern Progressive Web Application (PWA) using GraphQL and Apollo Server. By upgrading from a RESTful API to GraphQL, the application achieves enhanced performance and flexibility in fetching and managing book data. Leveraging the MERN stack with React, MongoDB, Node.js, and Express.js, the Book Search Engine ensures seamless integration and reliability. Users can effortlessly search for books, save them to their account, and manage their reading list. The application also features user authentication, allowing users to securely log in, sign up, and access their saved books. Deployed on Render with MongoDB Atlas for database management, this Book Search Engine PWA delivers a streamlined and efficient book browsing experience for avid readers.

## User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Technologies
The technologies I used in this challenge includes:

1. Node.js
2. Express.js
3. MongoDB database
4. MongoDB Atlas
5. Concurrently
6. Apollo Server
7. Render
8. React
9. GraphQL
10. Visual Studio Code(VS-code)
11. Github: Github was used to create a repository which includes all the required files, links to the projects, package.json, npmrc file, gitignore and the README file.
12. Gitlab: Gitlab was used to clone the project to our laptop.

## Installation
1. To install the challenge#21 , first create a new repository in your Github account, and then clone this repository to your local computer. 
```
To clone: git clone https://github.com/your-username/repository-name.git   
```           

2. Open the cloned repository in a visual studio code.
 
3. Open integrated terminal in the root directory in order to run "npm install" on the command line to install dependencies.

4. To launch the server and view the application in the browser, navigate to the root directory and execute the command "npm run develop".

## Usage
1. Open the repository, run 'npm install' to install dependencies.

2. Open integrated terminal in the root directory in order to run "npm run develop" to start the server. 

3. View the application either locally by running it on your machine or open the deployed application in your web browser.

4. Upon accessing the application, you should see the Book Search Engine interface. Upon loading the book search engine, users will be prompted with the following options "Search for Books", "Login/Signup", and "Searchbar".

5. Upon opening the application, users are prompted to access the menu where they can either log in or sign up using a modal, allowing them to create a new account or log in to an existing one.

6. Additionally, upon entering a search query and submitting it, users can browse through search results, each displaying book details, and save desired books to their account with a click of a button.

7. Users can view their saved books, each displaying details, and delete unwanted books from their account.

## Screenshot
**The Book Search Engine - homepage:**

![The Book Search Engine_homepage](/Assets/homepage.png)

**The Book Search Engine - Login/Signup:** 

![The Book Search Engine_login-signup.jpeg](/Assets/login_signup.jpeg)

**This image shows the Book Search Engine - bookResults:**

![The Book Search Engine_bookResults](/Assets/bookResults.png)

**The following image shows the Book Search Engine - saveButton:**

![The Book Search Engine_saveButton](/Assets/saveButton.png)

**The following image shows the Book Search Engine - savedBooks:**

![The Book Search Engine_savedBooks](/Assets/savedBooks.jpeg)

**The following image shows the Book Search Engine - noSavedBooks:**

![The Book Search Engine_noSavedBooks](/Assets/noSavedBooks.jpeg)

## Contributions
Contributions to the The Book Search Engine are welcome and encouraged. Here are some ways you can contribute:

1. **Bug Reports and Feature Requests:**
  - If you encounter any issues or have suggestions for new features, please open an issue on the GitHub repository.
    
2. **Enhancements to The Book Search Engine Application:**
  -  We welcome contributions aimed at improving this application. If you find ways to enhance the application or identify any limitations, feel free to submit a pull request.

3. **Documentation Improvements:**
  - Help improve the clarity and completeness of this documentation. If you find areas that need clarification or additional information, submit a pull request with your suggested changes.     

## Tests
There are no tests required for this project.

## Links
- [Deployment link]()
- [GitHub repository](https://github.com/MunibaP/Book-Search-Engine.git)
  
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
