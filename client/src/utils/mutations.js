import { gql } from '@apollo/client';

// Login_User executes the login mutation.
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

// Add_User executes the addUser mutation.
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

// Save_Book executes the saveBook mutation.
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
        _id
        username
        email
        savedBooks {
                bookId
                authors
                description
                image
                title
                link
            }
        }
    }
`;

// Remove_Book executes the removeBook mutation.
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image  
                title
                description
                link
            }
        }
    }
`;