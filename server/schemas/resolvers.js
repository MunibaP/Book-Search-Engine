// Defining the query and mutations for Mongoose models
const {User} = require('../models');
// const {AuthenticationError} = require('apollo-server-express');
// const { signToken } = require('../utils/auth');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                .populate("savedBooks");

                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        // Resolver function for addUser mutation
        addUser: async (parent, {username, email, password}) => {

            // Function to create new user in the database
            const user = await User.create({username, email, password});
            
            // Generate a token for the newly created user
            const token = signToken(user);
            
            return {token, user};
        },

        // Resolver function for login mutation
        login: async (parent, { email, password }) => {

            // Find user by email
            const user = await User.findOne({ email });

            // Function to throw an auth error if no user is found with a specific email
            if (!user) {
                throw new AuthenticationError('User not Found!');
            }

            // Checks if the password is correct, throw an auth error if password is incorrect
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password!');
            }

            // generate a token for the authenticated user
            const token = signToken(user);

            return { token, user };
        },

        // Resolver function for saveBook mutation
        saveBook: async (parent, { bookData }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runValidators: true }
                ).populate("savedBooks");

                return updatedUser;
            } catch (err) {
                console.error(err);
                throw new Error("Unable to save the book.");
            }

        },

        // Resolver function for removeBook mutation
        removeBook: async (parent, { bookId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                ).populate("savedBooks"); 

                if(!updatedUser) {
                    throw new Error("Could not find user with this id!");
                }

                return updatedUser;
            } catch (err) {
                console.error(err);
                throw new Error("Unable to remove the book.");
            }
        },
    },
};

module.exports = resolvers;
