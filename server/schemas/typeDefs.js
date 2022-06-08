const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    user(_id: ID!, username: String, email: String, password: String!): User
    users: [User]
    book(
      authors: String
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): Book
    books: [Book]
  }
  type Mutations {
    addUser(username: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      author: String
      description: String
      bookId: String!
      image: String
      link: String
    ): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
