
const { gql } = require('apollo-server');

const TypeDefs = gql`
    enum Theme {
        DEFAULT
    }

    enum Format {
        HTML
        MD
        PLAIN_TEXT
    }

    type Post {
        id: ID
        createdOn: String!
        createdBy: User!
        intro: String!
        coverImage: String
        keywords: [String]!
        theme: Theme
        body: String
        format: Format
    }

    type User {
        id: ID
        displayName: String!
        email: String!
        avatar: String!
        userName: String!
    }

    type Query {
        allPosts: [Post!]!
        allUsers: [User!]!
    }
`;

module.exports = TypeDefs;
